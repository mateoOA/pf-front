import { Fragment, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink, useLocation } from 'react-router-dom';
import Logo from "../../assets/Logo.png"


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Event listener para el botón de búsqueda
    const searchButton = document.getElementById('searchButton');
    const handleButtonClick = () => {
      const searchInput = document.getElementById('searchInput');
      const searchText = searchInput.value;
      console.log(searchText);
      searchInput.value = ''; // Borra el contenido del campo de búsqueda
    };
    searchButton.addEventListener('click', handleButtonClick);

    // Event listener para la tecla "Enter" en el campo de búsqueda
    const searchInput = document.getElementById('searchInput');
    const handleEnterKey = (event) => {
      if (event.key === 'Enter') {
        const searchText = searchInput.value;
        console.log(searchText);
        searchInput.value = ''; // Borra el contenido del campo de búsqueda
      }
    };
    searchInput.addEventListener('keydown', handleEnterKey);

    // Limpia los event listeners cuando el componente se desmonta
    return () => {
      searchButton.removeEventListener('click', handleButtonClick);
      searchInput.removeEventListener('keydown', handleEnterKey);
    };
  }, []);

  return (
    <div>
      <div>
        <Disclosure as="nav" className="w-full bg-[#121212]">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="w-8 h-auto mx-rigth-[200px]">
                      <img
                        src={Logo}
                        alt=""
                        className="h-[40px] w-[60px]"
                      />
                    </div>
                    <div className="hidden sm:ml-[250px] sm:block">
                      <div className="flex space-x-4">
                        <div className='absolute top-5 space-x-10'>
                          {pathname !== "/" &&
                            <NavLink to="/home" className=" text-white hover:text-darkorange">Home</NavLink>}
                          {pathname !== "/" &&
                            <NavLink to="/Products" className=" text-white hover:text-darkorange">Productos</NavLink>}
                          {pathname !== "/" &&
                            <NavLink to="/Aboutus" className=" text-white hover:text-darkorange">About Us</NavLink>}
                          {pathname !== "/" &&
                            <NavLink to="/Myaccount" className=" space-x-96  text-white hover:text-darkorange">My acount</NavLink>}
                        </div>
                      </div>

                    </div>
                  </div>
                  {/* searchBar */}
                  <div>
                    <input
                      id="searchInput"
                      className="border-2 placeholder:bg-transparent border-gray-300  h-10 px-5 pr-16 rounded-lg text-white-300 hover: hover:text-darkorange rounded-md px-3 py-2 text-sm font-medium"
                      type="search"
                      name="search"
                      placeholder="Search"
                    />
                    <button id="searchButton" type="submit" className="relative right-0  m-auto">
                      <svg
                        className="text-darkorange h-4 w-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        width="512px"
                        height="512px"
                        viewBox="0 0 56.966 56.966"
                        style={{ enableBackground: 'new 0 0 56.966 56.966' }}
                        xmlSpace="preserve"
                      >
                        <path
                          d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                    <a href="/cart ">
                      <button
                        type="button"
                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 text-darkorange hover:text-crimson"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </a>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src=""
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-[#121212] py-1 shadow-lg">
                        <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/login"
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm  text-white hover:text-darkorange')}
                              >
                                Log In
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm  text-white hover:text-darkorange')}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/"
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm  text-white hover:text-darkorange')}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}

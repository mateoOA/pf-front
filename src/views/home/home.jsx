import GralButton from '../../components/button/button';
import NavBar from '../../components/navBar/navBar';

export default function Home() {
  return (
        <>
             <>
                <NavBar/>
            </>
            <>
                <GralButton linkTo="/" label="Landing"/>
                <GralButton linkTo="/product" label="Product"/>
                <GralButton linkTo="/profile" label="Profile"/>
                <GralButton linkTo="/store" label="Store"/>
                <GralButton linkTo="/us" label="Us"/>
            </>
        </>
    );
}

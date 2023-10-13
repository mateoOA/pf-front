import { NavLink } from "react-router-dom";

export default function Header() {

  return (
    <div className="absolute overflow-hidden top-0 left-0  bg-black w-screen h-screen flex flex-col justify-center items-center">
  <div className="bg-[#000000] flex flex-col justify-center items-center w-[303px] h-16 rounded-sm">
    <NavLink to="/home" className="text-center text-2xl font-['Anton'] tracking-[1.2] leading-[32px] text-white">
      Enter
    </NavLink>
  </div>
</div>

  )
}
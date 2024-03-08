import { NavLink } from "react-router-dom";

const TheNavbar = () => {
  return (
    <nav className="bg-zinc-800 p-2  sm:px-10 sm:py-5 flex items-center justify-between">
      <h4 className="font-semibold sm:text-xl text-sm text-white">Sudharsan</h4>

      <ul className="flex space-x-4">
        <li className="text-white sm:text-base text-sm hover:text-slate-400">
          <NavLink to={"/"} className="active-nav" aria-current="page">
            Home
          </NavLink>
        </li>
        <li className="text-white sm:text-base text-sm hover:text-slate-400">
          <NavLink to={"/about"} className="active-nav" aria-current="page">
            About
          </NavLink>
        </li>
        <li className="text-white sm:text-base text-sm hover:text-slate-400">
          <NavLink to={"/contact"} className="active-nav" aria-current="page">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default TheNavbar;

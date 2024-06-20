import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="sticky top-0 border-b border-gray-400 bg-white border-opacity-20">
      <div className="max-w-main-width mx-auto">
        <ul className="flex items-center gap-4 h-[60px]">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"cart"}>Cart</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

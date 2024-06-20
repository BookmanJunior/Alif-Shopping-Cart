import { NavLink } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

export default function Nav() {
  const cartLength = useAppSelector((state) => state.cart.length);

  return (
    <nav className="sticky top-0 border-b border-gray-400 bg-white border-opacity-20">
      <div className="max-w-main-width mx-auto">
        <ul className="flex items-center gap-4 h-[60px]">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink
              to={"cart"}
              data-cart={cartLength > 0 ? cartLength : ""}
              className={"after:content-[attr(data-cart)] after:mx-1"}
            >
              Cart
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

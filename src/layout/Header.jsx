import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaLongArrowAltRight, FaShoppingCart, FaUser,} from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

const guestNav = [
  { to: "/", text: "Login", href: "/" },
  { to: "/register", text: "Sign up" },
];

const userNav = [
  // { to: "/", text: "Home" },
  // { to: "/new", text: "New Todo", },
  { to: "/product", text: "Product" },
];

const adminNav = [
  // { to: "/product", text: "Product", },
];

export default function Header() {
  const { user, logout } = useAuth();
  const finalNav = user?.id
    ? user.role === "ADMIN"
      ? adminNav
      : userNav
    : guestNav;

  const navigate = useNavigate();

  const hdlLogout = () => {
    logout();
    navigate("/");
  };

  const products = [
    { name: "Login", description: "", href: "/" },
    { name: "Register", description: "", href: "register" },
    { name: "Security", description: "", href: "#" },
  ];
  const callsToAction = [
    { name: "Logout", href: "#", icon: FaLongArrowAltRight },
    // { name: 'Contact sales', href: '#', icon: PhoneIcon },
  ];

  return (
    <div className="navbar bg-stone-700">
      <div className="flex-1">
        <Link
          to={user?.id ? "/" : "/"}
          className="btn btn-ghost text-3xl text-white"
        >
          FAYLINN
        </Link>
      </div>
      <div className="navbar ">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl"></a>
        </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {finalNav.map((el) => (
            <li key={el.to}>
              <Link to={el.to}>{el.text}</Link>
            </li>
          ))}
          {user?.id && (
            <li>
              <div className="flex-none gap-2">
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered w-24 md:w-auto"
                  />
                </div>
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="menu menu-horizontal">
                      <FaUser
                        className="h-4 w-4 flex-none text-white"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="mt-6 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                  >
                    {/* <li>
                      <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </a>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li> */}
                    <li>
                      <a to="#" onClick={hdlLogout}>
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
                <li>
                  <Link to="/cart">
                    <FaShoppingCart />
                  </Link>
                </li>
                <li>
                  <Link to="/heart">
                    <FaHeart />
                  </Link>
                </li>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

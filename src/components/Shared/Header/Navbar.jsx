import { useContext } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import logo from "../../../assets/images/logo.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch();
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active"
              : "hover:bg-orange-500/50 hover:text-white"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addProducts"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active"
              : " hover:bg-orange-500/50 hover:text-white"
          }
        >
          Add Products
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-green-900 py-2">
      <div className="navbar px-28">
        <div className="w-1/2 navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <div>
            <Link to="/">
              <img src={logo} alt="" className="w-72" />
            </Link>
          </div>
        </div>
        <div className="form-control w-full">
          <input
            type="text"
            placeholder="Search here"
            className="input input-bordered bg-orange-500/5 input-sm w-full select-warning max-w-xs"
          />
        </div>
        <div className="w-1/2 navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2 text-white font-bold">
              {navLinks}
            </ul>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <MdOutlineFavoriteBorder className="text-xl text-orange-500 font-bold" />
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-72 bg-base-100 shadow"
              >
                <div className="card-body relative">
                  <p>dkfdfhdfkdjfkdgjfdkjkgjdfs gdjgfd</p>
                  <div className="absolute right-3 top-3 font-medium text-lg">
                    <button className="px-2 hover:bg-orange-200 rounded-full">
                      X
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-orange-500 font-bold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="z-[1] mt-8 card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="gap-6 menu-horizontal px-1">
                {user ? (
                  <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      {user && <img src={user?.photoURL} />}
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu dropdown-content z-[1] p-4 shadow bg-base-100 rounded-box w-40 mt-4"
                  >
                    <div className="text-center">
                      {user && <p className="mb-3 text-black">{user?.displayName}</p>}
                      <Link to='/login'><button onClick={handleLogOut} className="btn btn-xs btn-warning">Log out</button></Link>
                    </div>
                  </ul>
                </div>
                ) : (
                  <li className="text-white font-medium">
                    <NavLink
                      to="/login"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "active"
                          : " hover:bg-orange-500/50 hover:text-white"
                      }
                    >
                      Login
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navitem = (
    <>
      <Link
        to="/"
        className="pb-2 mb-2 md:mr-4 text-xl hover:border-b-2 hover:border-b-red-500 "
      // className="mb-2 md:mr-4  btn font-semibold btn-secondary hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
      >
        Home
      </Link>
      <a
        href="#skill"
        className="pb-2 mb-2 md:mr-4 text-xl hover:border-b-2 hover:border-b-red-500 "
      // className="mb-2 md:mr-4  btn font-semibold btn-secondary hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
      >
        Skills
      </a>

      <a
        href="#project"
        to="/project"
        className="pb-2 mb-2 md:mr-4 text-xl hover:border-b-2 hover:border-b-red-500 "
      // className="mb-2 md:mr-4 btn font-semibold btn-secondary hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
      >
        Projects
      </a>

      <a
        href="#edu"
        className="pb-2 mb-2 md:mr-4 text-xl hover:border-b-2 hover:border-b-red-500 "
      // className="mb-2 md:mr-4 btn  font-semibold btn-secondary hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
      >
        Education
      </a>

      <a
        href="#contact"
        className="pb-2 mb-2 md:mr-4 text-xl hover:border-b-2 hover:border-b-red-500 "
      // className="mb-2 md:mr-4  btn font-semibold btn-secondary hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
      >
        Contact me
      </a>
    </>
  );
  return (
    <div id="nav">
      <div className="navbar text-white bg-slate-700  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm text-black md:text-white dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navitem}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost pr-5 text-xl ">
            Jabunnesa Eva
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-black md:text-white px-1">
            {navitem}
          </ul>
        </div>
        <div className="navbar-end pl-5">
          <Link
            to="https://github.com/jabunnesaeva305"
            className="btn btn-secondary hover:bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500"
          >
            <FaGithub className=" text-2xl" />

          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

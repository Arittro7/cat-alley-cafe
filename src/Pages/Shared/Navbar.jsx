import { Link } from "react-router-dom";
import logo2 from "../../assets/logo2.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, Logout } = useContext(AuthContext);

  const handleLogout = () => {
    Logout()
      .then(() => {
        console.log("Logout successful");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logout successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const navOptions = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order</Link>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
      {user ? (
        <>
          <li>
            <a onClick={handleLogout}>Logout</a>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar fixed bg-opacity-50 z-10 text-white bg-black">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <img className="w-9 bg-white rounded-full" src={logo2} alt="" />
            <p className="text-xl font-semibold">
              CatAlley<span className="text-green-600">CAFE</span>
            </p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <p className="text-xl font-semibold mr-5 text-green-500">{user?.displayName}</p>
          {/* <a className="btn">Button</a> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

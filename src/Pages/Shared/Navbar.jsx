import logo from '../../assets/logo.png'
import logo2 from '../../assets/logo2.png'
const Navbar = () => {

  const navOptions = <>
  <li><a href='#home'>Home</a></li>
  <li><a>About</a></li>
  <li><a>Blog</a></li>
  <li><a href='#contact'>Contact</a></li>
  </>

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
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navOptions}
      </ul>
    </div>
    <div className='flex items-center gap-2'>
    <img className='w-9 bg-white rounded-full' src={logo2} alt="" />
    <p className="text-xl font-semibold">CatAlley<span className="text-green-600">CAFE</span></p>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    </div>
  );
};

export default Navbar;
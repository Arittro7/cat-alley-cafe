import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar";
import { Bounce, ToastContainer } from "react-toastify"; //remove this if toastify create problem

const Main = () => {
  const location = useLocation();
  const noHeadFoot =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div>
      {noHeadFoot || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHeadFoot || <Footer></Footer>}

      {/* Toastify for notifications remove if create problem */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default Main;

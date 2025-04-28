import { useContext, useEffect } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from "sweetalert2";

const Login = () => {

  const {signIn} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
    .then(result =>{
      const user = result.user
      console.log(user);
      Swal.fire({
                position: "center",
                icon: "success",
                title: "Login successful",
                showConfirmButton: false,
                timer: 1500,
              }); 
              navigate(from, { replace: true });     
    })
  };

  useEffect( () =>{
    loadCaptchaEnginge(6);
  }, [])

  return (
   <>
    <Helmet>
            <title>CatAlley | Login</title>
          </Helmet>
    <div>
      <div className="hero bg-base-200 min-h-screen w-full">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-1/2">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6 text-2xl">
              Foods are ultimate reason why we work so hard to get paid. So that
              we can go at{" "}
              <span className="text-3xl font-semibold text-orange-500">
                Cat Alley Cafe
              </span>{" "}
              and eat the best food in the world.
            </p>
          </div>
          <div className="card bg-base-100 w-1/2 mr-5 max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="fieldset-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <label className="fieldset-label">Captcha
                <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  name="captcha"
                  className="input border-2 border-gray-300 rounded-md p-2"
                  placeholder="Type the above text"
                />
                <div className="mt-3"> 
                  <a className="link link-hover">Forgot password?</a>
                </div>

                <input
                  className="btn btn-neutral mt-4"
                  type="submit"
                  value="Login"
                />
              </fieldset>
            <h1>Don't have an account <Link className='text-orange-600' to="/signup">Sign Up Now</Link></h1>
            </form>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default Login;

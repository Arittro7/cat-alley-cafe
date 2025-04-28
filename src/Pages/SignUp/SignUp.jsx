import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {createUser} = useContext(AuthContext)

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result =>{
      const loggedUser = result.useForm
      console.log(loggedUser);
    })
  };

  return (
    <>
      <Helmet>
        <title>CatAlley | SignUp</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content">
          <div className="text-center lg:text-left w-1/3 mr-6">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="name"
                  name="name"
                  {...register("name")}
                  className="input"
                  placeholder="Name"
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  className="input"
                  placeholder="Email"
                />
                <br />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
                  })}
                  className="input"
                  placeholder="Password"
                />
                <br />
                {errors.password?.type === "required" && (
                  <span className="text-red-500">
                    You must create a password
                  </span>
                )}

                {errors.password?.type === "minLength" && (
                  <span className="text-red-500">
                    Password must contain at least 6 character
                  </span>
                )}

                {errors.password?.type === "maxLength" && (
                  <span className="text-red-500">
                    Password can contain max 20 character
                  </span>
                )}

                {errors.password?.type === "pattern" && (
                  <span className="text-red-500">
                    At least one upper-case one lower-case and one special
                    character
                  </span>
                )}
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Sign Up</button>
                <h1>
                  Don't have an account{" "}
                  <Link className="text-purple-700" to="/login">
                    Login
                  </Link>
                </h1>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

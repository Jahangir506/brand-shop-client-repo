import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { HiArrowSmallRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const Login = () => {
  return (
    <>
      <div className="hero bg-base-200 pt-48 pb-36">
        <div className="hero-content flex-col lg:flex-row-reverse w-full">
        
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-warning">Login</button>
              </div>
              <Link to="/register">
                <div className="text-center flex justify-center items-center">
                  <span className="mr-1">Please create a </span>
                   <span className="text-blue-600 underline">account</span>
                    <span className="text-md flex items-center justify-center ml-2">
                      <span className="mr-1 text-2xl">OR</span>
                      <HiArrowSmallRight />
                      <Link className="mr-3 ml-4">
                        <FaXTwitter className="text-2xl" />
                      </Link>
                      <Link>
                        <FcGoogle className="text-2xl" />
                      </Link>
                    </span>
                </div>
              </Link>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Login;

import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub, } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { HiArrowSmallRight } from "react-icons/hi2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";
import Footer from "../Footer/Footer";


const Login = () => {
  const {signIn, signInPopUp} = useContext(AuthContext)
  const [loginError, setLoginError] = useState('')
  const [showPass, setShowPass] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGithubSignIn = () => {
    signInPopUp()
      .then((result) => {
        const user = result.user;
        fetch('https://brand-shop-server-repo.vercel.app/user', {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
          console.log(user);
        Swal.fire({
          title: "User Create Successfully",
          icon: "success",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error.message);
        setLoginError("Gmail is already Use!")
      });
  };

  
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      Swal.fire(
        'Opps!',
        'you have to enter at least 6 digit!',
        'error'
      )
      return;
    }

    if (!/[A-Z]/.test(password)) {
      Swal.fire(
        'Opps!',
        'Password should contain at least one uppercase character.!',
        'error'
      )
      return;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      Swal.fire(
        'Opps!',
        'Password should contain at least one special character.!',
        'error'
      )
      return;
    }

    signIn(email, password)
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
        fetch('https://brand-shop-server-repo.vercel.app/user', {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(loginUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
          console.log(loginUser);
        Swal.fire({
          title: "User Create Successfully",
          icon: "success",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        setLoginError("Password is incorrect for this email!");
      });
  };

  return (
    <>
      <div className="hero bg-base-200 dark:bg-black/20 pt-48 pb-36">
        <div className="hero-content flex-col lg:flex-row-reverse w-full">
        
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
            <form onSubmit={handleLogin} className="card-body">
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
                <div className="relative w-full">
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered w-full"
                    required
                  />
                  <span
                    onClick={() => setShowPass(!showPass)}
                    className="absolute bottom-1/3 right-4 text-lg"
                  >
                    {showPass ? <FaEyeSlash /> : <FaEye></FaEye>}
                  </span>
                </div>
                <label className="label mb-2">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                {loginError && (
                  <div className="py-3 bg-red-50 px-2 rounded-lg">
                    <p className="text-red-500 text-center">{loginError}</p>
                  </div>
                )}
              </div>
              <div className="form-control mt-2">
                <button className="btn btn-warning">Login</button>
              </div>
              <Link to="/register">
                <div className="text-center dark:text-black flex justify-center items-center">
                  <span className="mr-1">Please create a </span>
                   <span className="text-blue-600 underline">account</span>
                    <span className="text-md flex items-center justify-center ml-2">
                      <span className="mr-1 text-2xl">OR</span>
                      <HiArrowSmallRight />
                      <Link className="mr-3 ml-4">
                        <FaGithub onClick={handleGithubSignIn} className="text-2xl" />
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

import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub, } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { HiArrowSmallRight } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";
import Footer from "../Footer/Footer";

const Register = () => {
    const { createUser , signInPopUp} = useContext(AuthContext)
    const [registerError, setRegisterError] = useState("");
    const navigate = useNavigate();
    const [showPass, setShowPass] = useState(false);
  
    const handleGithubSignIn = () => {
      signInPopUp()
        .then((result) => {
          const users = result.user;
          console.log(users);
          Swal.fire({
            title: "User Create Successfully",
            icon: "success",
          });
          navigate(location?.state ? location.state : "/");
        })
        .catch((error) => {
          console.error(error.message);
          setRegisterError("Email is already Use!")
        });
    };

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        
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
        createUser(email, password)
        .then(result => {
            const registerUser = result.user;
            console.log(registerUser);

            const user = {name, email, password}
            fetch('http://localhost:5007/user', {
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
            Swal.fire({
              title: "User Create Successfully.!",
              icon: "success",
            });
            navigate(location?.state ? location.state : "/");
        })
        .catch(error => {
            console.error(error.message);
            setRegisterError("Email is already Use!")
        })
    }

  return (
    <>
      <div className="hero bg-base-200 pt-36 pb-10">
        <div className="hero-content flex-col lg:flex-row-reverse w-full">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                {registerError && (
                  <div className="py-3 bg-red-50 px-2 rounded">
                    <p className="text-red-500">{registerError}</p>
                  </div>
                )}
              </div>
              <div className="form-control mt-2">
                <button className="btn btn-warning">Register</button>
              </div>
              <Link to="/login">
                <div className="text-center flex justify-center items-center">
                  <span className="mr-1">Already have an </span>
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

export default Register;

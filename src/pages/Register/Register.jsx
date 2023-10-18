import { useContext } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { HiArrowSmallRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Footer from "../Footer/Footer";

const Register = () => {
    const { createUser } = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result => {
            const registerUser = result.user;
            console.log(registerUser);

            const user = {name, email, password}
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
        })
        .catch(error => {
            console.error(error);
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
                <input
                  type="password"
                  name="password"
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

export default Register;

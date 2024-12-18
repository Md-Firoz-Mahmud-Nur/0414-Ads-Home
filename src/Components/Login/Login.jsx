import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Login = () => {
  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-[#EDEDF5] px-2">
      <div className="container mx-auto my-4 flex max-h-min flex-col items-center rounded-2xl border bg-white p-4">
        <img className="size-60" src={Logo} alt="" />
        <form className="mt-10 flex w-10/12 flex-col gap-4">
          <div className="form-control col-span-2 w-full md:col-span-1">
            <label className="input-group">
              <input
                type="number"
                min={0}
                className="input input-bordered w-full placeholder:text-gray-500"
                name="fullName"
                placeholder="Enter Mobile Number"
                required
              />
            </label>
          </div>
          <div className="form-control col-span-2 w-full md:col-span-1">
            <label className="input-group">
              <input
                type="password"
                min={0}
                className="input input-bordered w-full placeholder:text-gray-500"
                name="fullName"
                placeholder="Enter Password"
                required
              />
            </label>
          </div>
          <button className="hover:border-blue-500-500 btn btn-outline mt-5 border-2 border-blue-500 text-xl text-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white">
            Login
          </button>
        </form>
        <p className="pt-4">
          Not registered yet?
          <Link className="btn-link px-1" to="/register">
            Register
          </Link>
          now
        </p>
      </div>
    </div>
  );
};

export default Login;

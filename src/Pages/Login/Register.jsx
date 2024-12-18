import { Link, Navigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import { uploadImage } from "../../Hooks/imageUpload";

const Register = () => {
  const { createNewUser, updateExistingUserProfile } = useContext(AuthContext);
  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.fullName.value;
    const email = e.target.email.value;
    const photo = e.target.photo.files[0];
    const mobileNumber = e.target.mobileNumber.value;
    const password = e.target.password.value;
    const reEnterPassword = e.target.reEnterPassword.value;
    const refer = e.target.refer.value;
    console.log(name, email, mobileNumber, password, reEnterPassword, refer);
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter");
      return;
    }

    try {
      const photoUrl = photo ? await uploadImage(photo) : "";

      const result = await createNewUser(email, password);
      console.log(result);

      await updateExistingUserProfile(name, photoUrl);

      toast.success("Registration successful. Redirecting to home page...", {
        autoClose: 1500,
      });

      setTimeout(() => {
        Navigate(location?.state ? location.state : "/");
      }, 1500);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-[#EDEDF5] px-2">
      <div className="container mx-auto my-4 flex max-h-min flex-col items-center rounded-2xl border bg-white p-4">
        <img className="size-60" src={Logo} alt="" />
        {/* form */}
        <form
          onSubmit={handleRegister}
          className="mt-10 flex w-10/12 flex-col gap-4"
        >
          <div className="form-control col-span-2 w-full md:col-span-1">
            <label className="input-group">
              <input
                type="text"
                min={0}
                className="input input-bordered w-full placeholder:text-gray-500"
                name="fullName"
                placeholder="Full Name"
                required
              />
            </label>
          </div>
          <div className="form-control col-span-2 w-full md:col-span-1">
            <label className="input-group">
              <input
                type="email"
                min={0}
                className="input input-bordered w-full placeholder:text-gray-500"
                name="email"
                placeholder="Email Address"
                required
              />
            </label>
          </div>
          <div className="form-control w-full">
            <input
              name="photo"
              type="file"
              className="file-input file-input-bordered w-full"
            />
          </div>
          <div className="form-control col-span-2 w-full md:col-span-1">
            <label className="input-group">
              <input
                type="number"
                min={0}
                className="input input-bordered w-full placeholder:text-gray-500"
                name="mobileNumber"
                placeholder="Mobile Number"
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
                name="password"
                placeholder="Password"
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
                name="reEnterPassword"
                placeholder="Re Enter Password"
                required
              />
            </label>
          </div>
          <div className="form-control col-span-2 w-full md:col-span-1">
            <label className="input-group">
              <input
                type="text"
                min={0}
                className="input input-bordered w-full placeholder:text-gray-500"
                name="refer"
                placeholder="Refer (Optional)"
                // required
              />
            </label>
          </div>
          <button className="hover:border-blue-500-500 btn btn-outline mt-5 border-2 border-blue-500 text-xl text-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white">
            Register Now
          </button>
        </form>
        <p className="pt-4">
          Have an account?
          <Link className="btn-link px-1" to="/login">
            Login
          </Link>
          now
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;

import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useState } from "react";
import AuthContext from "../../AuthContext";
import Congratulation from "../../assets/Congratulation.jpeg";
import auth from "../../../Firebase.config";

const Register = () => {
  const { createNewUser, updateExistingUserProfile } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const generateReferCode = async (email) => {
    try {
      const encoder = new TextEncoder();
      const data = encoder.encode(email);
      const hashBuffer = await crypto.subtle.digest("SHA-256", data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
      const referCode = hashHex.slice(0, 8).toUpperCase();
      return referCode;
    } catch (error) {
      console.error("Error generating refer code:", error.message);
      throw error;
    }
  };

  const handleRegister = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const name = e.target.fullName.value;
    const email = e.target.email.value;
    const mobileNumber = e.target.mobileNumber.value;
    const password = e.target.password.value;
    const reEnterPassword = e.target.reEnterPassword.value;
    const referBy = e.target.refer.value;
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

    const isValidMobileNumber = /^01[3-9]\d{8}$/.test(mobileNumber);

    if (!isValidMobileNumber) {
      toast.error("Enter Valid Mobile Number");
      return;
    }

    if (!(password === reEnterPassword)) {
      toast.error("Enter Same Password");
      return;
    }

    try {
      const newUserEmail = await createNewUser(email, password);
      const referCode = await generateReferCode(newUserEmail.user.email);
      await updateExistingUserProfile(name);

      const newUser = {
        name,
        email,
        password,
        mobileNumber,
        referBy,
        balance: 50,
        referCode,
        createdAt: new Date(
          new Date().getTime() + 6 * 60 * 60 * 1000,
        ).toISOString(),
        role: "member",
      };

      const response = await fetch(`${import.meta.env.VITE_SERVER}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error("Failed to save user to database");
      } else {
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
          toast.success(
            "Registration successful. Redirecting to home page...",
            {
              autoClose: 1500,
            },
          );
          setTimeout(() => {
            navigate(location?.state ? location.state : "/");
          }, 1500);
        }, 7000);
      }
    } catch (error) {
      toast.error(error.message);
      if (auth.currentUser) {
        await auth.currentUser
          .delete()
          .then(() => {
            toast.error("Something went wrong");
          })
          .catch(() => {
            toast.error("Something Went Wrong");
          });
      } else {
        toast.error("Something went error");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-[#EDEDF5] px-2">
      <div className="container mx-auto my-4 flex max-h-min flex-col items-center rounded-2xl border bg-white p-4">
        <img className="size-60" src={Logo} alt="" />
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
              />
            </label>
          </div>
          <button
            className="hover:border-blue-500-500 btn btn-outline mt-5 border-2 border-blue-500 text-xl text-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center">
                <span className="loading loading-spinner loading-sm mr-2"></span>
                Loading...
              </span>
            ) : (
              "Register"
            )}
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
      {showModal && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
          <img
            src={Congratulation}
            alt="Congratulation"
            className="w-10/12 rounded-xl border border-black shadow-lg shadow-blue-300"
          />
        </div>
      )}
    </div>
  );
};

export default Register;

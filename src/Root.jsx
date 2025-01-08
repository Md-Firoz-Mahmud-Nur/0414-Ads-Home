import { Outlet } from "react-router-dom";
// import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

const Root = () => {
  return (
    <div>
      {/* <p className="bg-red-500 text-center text-white">last update on 7th January 2025 11 am</p> */}
      <Navbar></Navbar>
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Root;

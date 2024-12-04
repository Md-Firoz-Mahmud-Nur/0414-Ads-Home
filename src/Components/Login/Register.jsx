import Logo from "../../assets/logo.png";

const Register = () => {
  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-[#EDEDF5]">
      <div className="container mx-auto flex max-h-min flex-col items-center border bg-white p-4">
        <img className="size-60" src={Logo} alt="" />
        <div className="w-full border p-4"></div>
      </div>
    </div>
  );
};

export default Register;

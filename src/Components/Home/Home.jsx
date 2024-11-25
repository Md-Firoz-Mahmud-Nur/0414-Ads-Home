import AdsHome from "./AdsHome";
import Company from "./Company";
import Statement from "./Statement";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#EDEDF5]">
      <AdsHome></AdsHome>
      <Statement></Statement>
      <Company></Company>
    </div>
  );
};

export default Home;

import AdsHome from "./AdsHome";
import Company from "./Company";
import Notice from "./Notice";
import Statement from "./Statement";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#EDEDF5]">
      <Notice></Notice>
      <AdsHome></AdsHome>
      <Statement></Statement>
      <Company></Company>
    </div>
  );
};

export default Home;

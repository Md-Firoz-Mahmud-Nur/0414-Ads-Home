import Ads from "./Ads";
import AdsHome from "./AdsHome";
import Company from "./Company";
import Notice from "./Notice";
import Partner from "./Partner";
import Statement from "./Statement";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#EDEDF5]">
      <Notice></Notice>
      <AdsHome></AdsHome>
      <Ads></Ads>
      <Statement></Statement>
      <Company></Company>
      <Partner></Partner>
    </div>
  );
};

export default Home;

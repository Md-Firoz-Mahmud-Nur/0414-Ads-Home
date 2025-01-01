import Daraz from "../../assets/daraz.webp";
import AjkerDeal from "../../assets/ajkerdeal.webp";
import Bikroy from "../../assets/bikroy.webp";
import Othoba from "../../assets/othoba.webp";
import { Link } from "react-router-dom";

const Partner = () => {
  return (
    <div className="container mx-auto p-4 pb-32">
      <div className="rounded-md border border-black bg-white text-2xl font-bold text-blue-400">
        <h1 className="p-4">Our Partner</h1>
        <div className="my-2 border-t border-black p-0"></div>
        <div className="px-4 pb-4 text-black">
          {/* grid */}
          <div className="grid grid-cols-4">
            {/* 1st icon */}
            <Link to="https://www.daraz.com.bd/" className="col-3">
              <div
                style={{ height: "100%", borderRadius: "3px" }}
                className="row-3 p-1"
              >
                <div className="flex justify-center">
                  <img className="aspect-square size-12" src={Daraz} alt="" />
                </div>
                <h6 className="text-center text-sm">Daraz</h6>
              </div>
            </Link>
            {/* 2nd icon */}
            <div className="col-3">
              <div
                style={{ height: "100%", borderRadius: "3px" }}
                className="row-3 p-1"
              >
                <div className="flex justify-center">
                  <img
                    className="aspect-square size-12"
                    src={AjkerDeal}
                    alt=""
                  />
                </div>
                <h6 className="text-center text-sm">Ajker Deal</h6>
              </div>
            </div>
            {/* 3rd icon */}
            <div className="col-3">
              <div
                style={{ height: "100%", borderRadius: "3px" }}
                className="row-3 p-1"
              >
                <div className="flex justify-center">
                  <img className="aspect-square size-12" src={Bikroy} alt="" />
                </div>
                <h6 className="text-center text-sm">Bikroy</h6>
              </div>
            </div>
            {/* 4th icon */}
            <div className="col-3">
              <div
                style={{ height: "100%", borderRadius: "3px" }}
                className="row-3 p-1"
              >
                <div className="flex justify-center">
                  <img className="aspect-square size-12" src={Othoba} alt="" />
                </div>
                <h6 className="text-center text-sm">Othoba</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;

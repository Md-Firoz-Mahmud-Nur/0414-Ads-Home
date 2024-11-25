import { FaBangladeshiTakaSign, FaMoneyBills } from "react-icons/fa6";

const Statement = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="rounded-md border border-black bg-white text-2xl font-bold text-blue-400">
        <h1 className="p-4">Statement</h1>
        <div className="my-2 border-t border-black p-0"></div>
        <div className="px-4 pb-4 text-black">
          {/* grid */}
          <div className="grid grid-cols-2">
            {/* 1st icon */}
            <div className="col-3">
              <div
                style={{ height: "100%", borderRadius: "3px" }}
                className="row-3 p-1"
              >
                <center>
                  <FaBangladeshiTakaSign className="size-12 text-blue-500" />
                </center>
                <h6 className="text-center text-sm">More Work</h6>
              </div>
            </div>
            {/* 2nd icon */}
            <div className="col-3">
              <div
                style={{ height: "100%", borderRadius: "3px" }}
                className="row-3 p-1"
              >
                <center>
                  <FaMoneyBills className="size-12 text-blue-500" />
                </center>
                <h6 className="text-center text-sm">Withdrawal History</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statement;

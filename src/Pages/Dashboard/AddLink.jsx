const AddLink = () => {
  const HandleAddLink=(e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.url.value);
    console.log(e.target.amount.value);
  }
  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center bg-[#EDEDF5] px-2 pt-8">
      <div className="px- container mx-auto flex flex-col gap-6 rounded-lg bg-white p-6 shadow-md">
        <form
          onSubmit={HandleAddLink}
          className="mt-2 flex w-full flex-col gap-4"
        >
          <div className="form-control col-span-2 w-full md:col-span-1">
            <label className="input-group">
              <input
                type="text"
                min={0}
                className="input input-bordered w-full placeholder:text-gray-500"
                name="name"
                placeholder="Enter Name"
                required
              />
            </label>
          </div>
          <div className="form-control col-span-2 w-full md:col-span-1">
            <label className="input-group">
              <input
                type="url"
                min={0}
                className="input input-bordered w-full placeholder:text-gray-500"
                name="url"
                placeholder="Enter Link"
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
                name="amount"
                placeholder="Enter Amount"
                required
              />
            </label>
          </div>
          <button
            className="hover:border-blue-500-500 btn btn-outline mt-5 border-2 border-blue-500 text-xl text-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
            // disabled={isLoading}
          >
            {/* {isLoading ? (
              <span className="flex items-center">
                <span className="loading loading-spinner loading-sm mr-2"></span>
                Loading...
              </span>
            ) : (
              "Login"
            )} */}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddLink;

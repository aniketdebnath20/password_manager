
const App = () => {
  return (
    <>
      <div className="flex item-center justify-evenly">
        <div className="pt-30 flex flex-col gap-5 w-[100vh]">
          <form>
            <label className="text-gray-700">Enter Website Url</label>
            <div class="h-10 w-full rounded-md bg-gradient-to-r from-[#43e205] to-[#eabe60] p-[1px]">
              <input
                type="url"
                class="h-full w-full rounded-md bg-white outline-none px-2"
                placeholder="Your input"
              />
            </div>
            <div className="mt-7 flex gap-2 items-center">
              <label className="text-gray-700">Username</label>
              <div class="h-10 w-full rounded-md bg-gradient-to-r from-[#43e205] to-[#eabe60] p-[1px]">
                <input
                  type="text"
                  class="h-full w-full rounded-md bg-white outline-none px-2"
                  placeholder="Your input"
                />
              </div>

              <div class="h-10 w-[70%] rounded-full bg-gradient-to-r from-[#43e205] to-[#eabe60] p-[1px]">
                <input
                  type="password"
                  class="h-full w-full rounded-full bg-white outline-none px-2"
                  placeholder="Your input"
                />
              </div>
            </div>

            <button className="mt-7 h-10 w-full bg-gradient-to-r from-[#43e205] to-[#eabe60] rounded-md text-[snow]">
              {" "}
              Add Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default App;

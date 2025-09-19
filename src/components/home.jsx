import { CopyCheckIcon, DeleteIcon, EditIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [passwordArray, setPasswordArray] = useState([]);
  const [form, setForm] = useState({
    url: "",
    username: "",
    password: "",
  });

  const getPasswords = async () => {
    try {
      let req = await fetch("http://localhost:3000/");
      let password = await req.json();
      setPasswordArray(password);
      console.log(password);
    } catch (error) {
      console.log("db error", error);
    }
  };

  getPasswords();

  useEffect(() => {
    const password = localStorage.getItem("passwords");
    if (password) {
      setPasswordArray(JSON.parse(password));
    }
  }, []);

  const save = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:3000/", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: form.id }),
    });

    setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);

    await fetch("http://localhost:3000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, id: uuidv4() }),
    });

    setForm({ url: "", username: "", password: "" });
    alert("Password Added Successfully");
  };

  const DeletePassword = async (id) => {
    console.log("delte", id);
    setPasswordArray(passwordArray.filter((item) => item.id !== id));
    await fetch("http://localhost:3000/", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    alert("Password Deleted Successfully");
  };

  const EditPassowrd = (id) => {
    setForm({ ...passwordArray.filter((item) => item.id === id)[0], id: id });
    setPasswordArray(passwordArray.filter((item) => item.id !== id));
  };

  const handleCahnge = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const copyFile = (text) => {
    navigator.clipboard.writeText(text);
    toast("🦄Copied to clipboard !", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="flex item-center justify-evenly">
        <div className="pt-30 flex flex-col gap-5 w-[100vh]">
          <form>
            <label className="text-gray-700">Enter Website Url</label>
            <div class="h-10 w-full rounded-md bg-gradient-to-r from-[#43e205] to-[#eabe60] p-[1px]">
              <input
                name="url"
                type="text"
                class="h-full w-full rounded-md bg-white outline-none px-2"
                placeholder="Your input"
                value={form.url}
                onChange={handleCahnge}
                required
              />
            </div>
            <div className="mt-7 flex gap-2 items-center">
              <label className="text-gray-700">Username</label>
              <div class="h-10 w-full rounded-md bg-gradient-to-r from-[#43e205] to-[#eabe60] p-[1px]">
                <input
                  name="username"
                  type="text"
                  class="h-full w-full rounded-md bg-white outline-none px-2"
                  placeholder="Your input"
                  value={form.username}
                  onChange={handleCahnge}
                  required
                />
              </div>

              <div class="h-10 w-[70%] rounded-full bg-gradient-to-r from-[#43e205] to-[#eabe60] p-[1px]">
                <input
                  name="password"
                  type="password"
                  class="h-full w-full rounded-full bg-white outline-none px-2"
                  placeholder="Your input"
                  value={form.password}
                  onChange={handleCahnge}
                  required
                />
              </div>
            </div>

            <button
              onClick={save}
              className="mt-7 h-10 w-full bg-gradient-to-r from-[#43e205] to-[#eabe60] rounded-md text-[snow]"
            >
              {" "}
              Add Password
            </button>
          </form>
        </div>
      </div>

      {/* table */}
      {passwordArray.length > 0 && (
        <div className="overflow-x-auto mt-10 mx-20">
          <table className="min-w-full border border-gray-300 text-left text-gray-700 bg-white">
            <thead>
              <tr className="bg-gradient-to-r from-[#43e205] to-[#eabe60] text-white">
                <th className="py-2 px-4 border">Website URL</th>
                <th className="py-2 px-4 border">Username</th>
                <th className="py-2 px-4 border">Password</th>
                <th className="py-2 px-4 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {passwordArray.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border break-all">
                    <div className="flex items-center gap-2 justify-evenly">
                      {item.url}
                      <CopyCheckIcon
                        size={18}
                        onClick={() => {
                          copyFile(item.url);
                        }}
                      />
                    </div>
                  </td>
                  <td className="py-2 px-4 border">
                    <div className="flex items-center gap-2 justify-evenly">
                      {item.username}
                      <CopyCheckIcon
                        size={18}
                        onClick={() => {
                          copyFile(item.username);
                        }}
                      />
                    </div>
                  </td>
                  <td className="py-2 px-4 border">
                    <div className="flex items-center gap-2 justify-evenly">
                      {"*".repeat(item.password.length)}
                      <CopyCheckIcon
                        size={18}
                        onClick={() => {
                          copyFile(item.password);
                        }}
                      />
                    </div>
                  </td>
                  <td className="py-2 px-4 border">
                    <div className="flex items-center gap-2 justify-evenly">
                      <EditIcon
                        size={18}
                        onClick={() => {
                          EditPassowrd(item.id);
                        }}
                      />
                      <DeleteIcon
                        size={18}
                        onClick={() => {
                          DeletePassword(item.id);
                        }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Home;

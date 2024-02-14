import axios from "axios";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { FaFacebook, FaGoogle } from "react-icons/fa";

export default function LoginForm() {
  const { setUser } = useAuth();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const hdlChange = (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      // validation
      const rs = await axios.post("http://localhost:8000/auth/login", input);
      console.log(rs.data.token);
      localStorage.setItem("token", rs.data.token);
      const rs1 = await axios.get("http://localhost:8000/auth/me", {
        headers: { Authorization: `Bearer ${rs.data.token}` },
      });
      console.log(rs1.data);
      setUser(rs1.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="p-5 border w-1/3 min-w-[300px] mx-auto rounded-[15px] mt-8 bg-zinc-200 shadow-md">
      <div className="font-bold text-2xl mb-5 text-center">LOGIN</div>

      <form className="flex flex-col gap-4 items-center" onSubmit={hdlSubmit}>
        <label className="w-full max-w-xs">
          <span className="text-gray-500">Email</span>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            name="username"
            value={input.username}
            onChange={hdlChange}
          />
        </label>

        <label className="w-full max-w-xs">
          <span className="text-gray-500">Password</span>
          <input
            type="password"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            name="password"
            value={input.password}
            onChange={hdlChange}
          />
        </label>

        <button
          type="submit"
          className="mt-5 w-40 font-bold text-sm bg-stone-700 text-white py-2 px-4 rounded-[10px] hover:bg-stone-500 transition duration-300"
        >
          Login
        </button>
        <div>
          <button
            type="button"
            className="mt-5 flex items-center justify-center w-full bg-white font-bold text-sm py-2 px-4 rounded-[10px] hover:bg-stone-500 "
          >
            <FaGoogle className="mr-2" /> Continue with Google
          </button>
          <button
            type="button"
            className="mt-3 flex items-center justify-center w-full bg-white font-bold text-sm py-2 px-4 rounded-[10px] hover:bg-stone-500 "
          >
            <FaFacebook className="mr-2" /> Continue with Facebook
          </button>
        </div>
      </form>
    </div>
  );
}

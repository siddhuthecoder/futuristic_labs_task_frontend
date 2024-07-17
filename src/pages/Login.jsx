import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { UserActions } from "../store/userSlice";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState(false);

  const userData = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      navigate("/");
    }
  }, [userData, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmit(true);
    if (username === "" || password === "") {
      toast.error("All Fields are required");
      setSubmit(false);
      return;
    }

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/user/signin`,
        {
          username,
          password,
        }
      );
      localStorage.setItem("token", res.data.token);
      dispatch(UserActions.setUser(res.data.user));
      toast.success(res.data.message);
      navigate("/");
    } catch (error) {
      toast.error(error?.response?.data.message || error.message);
    } finally {
      setSubmit(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form
        className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl text-green-500 logo font-bold text-center mb-6">Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 p-2 w-full bg-gray-700 rounded border border-gray-600 focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 w-full bg-gray-700 rounded border border-gray-600 focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <p className="text-sm mb-6">
          Don't have an account?{" "}
          <Link to="/register" className="text-green-500">
            Register here
          </Link>
        </p>
        <div className="text-center">
          {!submit ? (
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Login
            </button>
          ) : (
            <button
              type="submit"
              disabled
              className="bg-green-500 text-white py-2 px-4 rounded opacity-50 cursor-not-allowed"
            >
              Logging in...
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;

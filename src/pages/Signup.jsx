import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { UserActions } from "../store/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaShare, FaXTwitter } from "react-icons/fa6";

const Signup = () => {
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
        `${process.env.REACT_APP_API_URL}/user/signup`,
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
    <>
      <div className="log_div">
       
        <form
          action=""
          className="w-[97%] max-w-[450px] mx-auto flex flex-col shadow rounded-[5px] bg-gray-800"
        >
          <div className="text-center font-bold text-2xl my-5 text-violet-400">
            Sign In
          </div>

          {/* <div className="flex items-center relative mt-2">
            <input
              type="text"
              className="bg-gray-700 w-[95%] mx-auto ps-[40px] h-[40px] rounded-md text-white placeholder-gray-400"
              placeholder="Your name"
            />
            <FaRegUser className="absolute left-[20px] z-[1] text-gray-400" />
          </div> */}
          <div className="hidden items-center relative mt-2">
            <input
              type="text"
              className="bg-gray-700 w-[95%] mx-auto ps-[40px] h-[40px] rounded-md text-white placeholder-gray-400"
              placeholder="Your Name"
              name="username"
            />
            <FaRegUser className="absolute left-[20px] z-[1] text-gray-400" />
          </div>
          
          <div className="flex items-center relative mt-2">
            <input
              type="password"
              className="bg-gray-700 w-[95%] mx-auto ps-[40px] h-[40px] rounded-md text-white placeholder-gray-400"
              placeholder="Your Name"
            />
            <FaRegUser className="absolute left-[20px] z-[1] text-gray-400" />
          </div>
         
          <div className="flex items-center relative mt-2">
            <input
              type="password"
              className="bg-gray-700 w-[95%] mx-auto ps-[40px] h-[40px] rounded-md text-white placeholder-gray-400"
              placeholder="Your Password"
            />
            <RiLockPasswordLine className="absolute left-[20px] z-[1] text-gray-400" />
          </div>
          <div className="flex my-4 w-[95%] mx-auto">
            <input type="checkbox" className="" placeholder="Your Password" />
            <p className="text-left ps-2 text-sm">
              <span className="text-white">Terms and Services</span> and{" "}
              <span className="text-white">Privacy Policy</span>
            </p>
          </div>
          <button className="w-[95%] mx-auto mb-4 bg-violet-600 text-white py-2 mt-2 rounded-[5px] hover:bg-violet-700">
            Create an account
          </button>
          <p className="text-center">
            <span className="text-gray-400">Already Registered? </span>
            <Link to="/signin" className="hover:underline text-violet-400 ">
              Sign In
            </Link>
          </p>
          <div className="flex w-full items-center justify-between h-[50px]">
            <div className="w-[35%] h-[1px] bg-gray-600 mx-auto"></div>
            <div className="mx-auto pb-1">or</div>
            <div className="w-[35%] h-[1px] bg-gray-600 mx-auto"></div>
          </div>
          <button className="flex justify-center items-center text-center text-white p-2 w-[95%] mx-auto rounded-md bg-gray-700 border-[1px] border-gray-600 hover:bg-gray-600">
            <FcGoogle />
            <span className="ml-4">Sign Up With Google</span>
          </button>
          <button className="mb-5 flex justify-center items-center text-center mt-2 text-white p-2 w-[95%] mx-auto rounded-md bg-gray-700 border-[1px] border-gray-600 hover:bg-gray-600">
            <FaXTwitter />
            <span className="ml-4">Sign Up With Twitter</span>
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;

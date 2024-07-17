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
    <>
      <div className="log_div">
        <form className="form_box" onSubmit={handleSubmit}>
          <h2 align="center">Login</h2>
          <div className="form_input">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form_input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p>
            Dont have an account?{" "}
            <Link to="/register" style={{ color: "#3265aa" }}>
              Register here
            </Link>
          </p>
          <div className="center_btn">
            {!submit ? (
              <button type="submit">Login</button>
            ) : (
              <button type="submit" disabled>
                Logging in...
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

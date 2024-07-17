import { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="log_div">
        <form className="form_box">
          <h2 align="center">Sign Up</h2>
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
          <p>Already have an account? Login here </p>
          <div className="center_btn">
            <button>Sign Up</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;

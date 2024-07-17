import React, { useEffect } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import { Toaster, toast } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import { fetchUser } from "./store/userSlice";

const App = () => {
  const userStatus = useSelector((state) => state.user.status);
  const userError = useSelector((state) => state.user.error);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (userStatus === "idle") {
      dispatch(fetchUser(token));
    }
  }, [dispatch, userStatus]);

  useEffect(() => {
    if (userError) {
      if (userError !== "Not Logged In") {
        toast.error(userError);
      }
      localStorage.removeItem("token");
    }
  }, [userError]);

  return (
    <>
      <Toaster />
      {userStatus === "loaded" ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
        </Routes>
      ) : (
        <>
          <div
            style={{
              width: "100%",
              margin: "0",
              minHeight: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div class="spinner"></div>
            <p style={{ fontSize: "18px" }}>Loading...</p>
          </div>
        </>
      )}
    </>
  );
};

export default App;

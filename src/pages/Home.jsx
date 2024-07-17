import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Sidebar from "../components/Sidebar";
import Canvas from "../components/Canvas";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { PiSquaresFourFill } from "react-icons/pi";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const Home = () => {
  const [components, setComponents] = useState([]);
  const userData = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!userData) {
      navigate("/register");
    }
  }, [userData, navigate]);

  return (
    <DndProvider backend={HTML5Backend}>
      <AppContainer>
        {!show && (
          <span
            className="z-[4] text-white cursor-pointer absolute left-[20px] w-[60px] h-[60px] border-[5px] border-[green] rounded-full bg-black flex justify-center items-center top-[20px]"
            onClick={() => setShow(true)}
          >
            <PiSquaresFourFill className="text-4xl text-green-500 cursor-pointer" />
          </span>
          
        )}
        {show && (
          <span
            className="z-[4] text-white cursor-pointer absolute left-[220px] top-[10px]"
            onClick={() => setShow(false)}
          >
            <IoClose className="text-3xl text-red-500 "/>
          </span>
          
        )}
        <div className={`w-[250px] h-screen ${show ? "flex" : "hidden"} flex-col overflow-y-scroll relative`}>
          <div className="w-full flex items-center flex-row-reverse relative overflow-x-visible">
            {/* <span
              className="z-[4] text-white hidden md:block cursor-pointer"
              onClick={() => setShow(false)}
            >
              <IoClose className="text-3xl text-red-500 "/>
            </span> */}
          </div>
          <Sidebar />
        </div>
        <Canvas components={components} setComponents={setComponents} />
      </AppContainer>
    </DndProvider>
  );
};

export default Home;

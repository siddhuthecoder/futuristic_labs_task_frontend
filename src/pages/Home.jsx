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

const MobileMessage = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
    font-size: 1.5rem;
    text-align: center;
    padding: 1rem;
  }
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
        <MobileMessage>
          Please open in desktop mode to use all features.
        </MobileMessage>
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
            <IoClose className="text-3xl text-red-500 " />
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

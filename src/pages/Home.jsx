import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Sidebar from "../components/Sidebar";
import Canvas from "../components/Canvas";
import styled from "styled-components";
import { PiSquaresFourDuotone } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";


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
  const [shadows,setShow] = useState(true)

  // useEffect(() => {
  //   if (!userData) {
  //     navigate("/login");
  //   }
  // }, [userData, navigate]);
  const handleToggle = (data) => {
    setShow(!data)
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <AppContainer>
        <div className="w-[250px] h-screen overflow-y-scroll relative flex">
          <Sidebar />
        </div>
        <Canvas components={components} setComponents={setComponents} />
      </AppContainer>
    </DndProvider>
  );
};

export default Home;

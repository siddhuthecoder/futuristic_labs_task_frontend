import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Sidebar from "../components/Sidebar";
import Canvas from "../components/Canvas";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const Home = () => {
  const [components, setComponents] = useState([]);

  return (
    <DndProvider backend={HTML5Backend}>
      <AppContainer>
        <Sidebar />
        <Canvas components={components} setComponents={setComponents} />
      </AppContainer>
    </DndProvider>
  );
};

export default Home;

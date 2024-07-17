import React, { useState } from 'react';
import styled from 'styled-components';
import { useDrag } from 'react-dnd';
import { FaCube } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const SidebarContainer = styled.div`
  width: 250px;
  color: white;
  position: fixed;
  top: 0;
  border-right: 1px solid #ccc;
  height: 100vh;
  display: flex;
  overflow-y: scroll;
  justify-content: between;
  flex-direction: column;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

const SidebarItem = styled.div``;

const Item = ({ type, children }) => {
  const [, drag] = useDrag(() => ({
    type: 'COMPONENT',
    item: { type },
  }));

  return (
    <SidebarItem ref={drag} className="ps-2 py-2 rounded-md hover:font-bold my-1 hover:bg-green-500 hover:text-black duration-300 w-[80%] mx-auto">
      {children}
    </SidebarItem>
  );
};

const Sidebar = ({ isShow }) => (
  <SidebarContainer>

    <div className="flex items-center text-2xl my-2 logo mb-[50px] gap-1 ps-2" style={{ fontFamily: "" }}>
      <div className="">Word press <span className="font-bold text-green-500 text-5xl">.</span></div>
    </div>
    <div className="flex items-center text-green-500">
      <FaCube className="text-2xl ms-2" />
      <div className="font-bold ps-2">Components</div>
    </div>
    <Item type="text">Text Block</Item>
    <Item type="image">Image Holder</Item>
    <Item type="button">Button</Item>
    <Item type="header">Header</Item>
    <Item type="footer">Footer</Item>
    <Item type="carousel">Carousel</Item>
    <Item type="card">Card</Item>
    <Item type="video">Video Embed</Item>
    <Item type="form">Form</Item>
    <Item type="grid">Grid Layout</Item>
    <Item type="social">Social Media Icons</Item>
    <div className="flex w-full mb-3">
      <button className="w-[80%] mx-auto h-[35px] rounded-md text-center text-black font-bold bg-green-500">Login</button>
    </div>
  </SidebarContainer>
);

export default Sidebar;

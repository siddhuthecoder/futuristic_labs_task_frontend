import React from 'react';
import styled from 'styled-components';
import { useDrag } from 'react-dnd';

const SidebarContainer = styled.div`
  width: 250px;
  background: #f7f7f7;
  padding: 20px;
  border-right: 1px solid #ccc;
`;

const SidebarItem = styled.div`
  padding: 10px;
  margin: 10px 0;
  background: #fff;
  border: 1px solid #ddd;
  cursor: pointer;
  text-align: center;
`;

const Item = ({ type, children }) => {
  const [, drag] = useDrag(() => ({
    type: 'COMPONENT',
    item: { type },
  }));

  return <SidebarItem ref={drag}>{children}</SidebarItem>;
};

const Sidebar = () => (
  <SidebarContainer>
    <h2>Components</h2>
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
  </SidebarContainer>
);

export default Sidebar;

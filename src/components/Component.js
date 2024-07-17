import React from 'react';
import styled from 'styled-components';

const ComponentContainer = styled.div`
  padding: 20px;
  margin: 10px 0;
  background: #fff;
  border: 1px solid #ddd;
`;

const TextComponent = styled.div`
  font-size: 14px;
`;

const ImageComponent = styled.div`
  width: 100%;
  height: 150px;
  background: #ccc;
`;

const ButtonComponent = styled.button`
  padding: 10px 20px;
  background: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const HeaderComponent = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const FooterComponent = styled.div`
  font-size: 14px;
  text-align: center;
`;

const CarouselComponent = styled.div`
  width: 100%;
  height: 200px;
  background: #eee;
`;

const CardComponent = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const VideoComponent = styled.div`
  width: 100%;
  height: 200px;
  background: #000;
`;

const FormComponent = styled.form`
  display: flex;
  flex-direction: column;

  & > input,
  & > textarea {
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ddd;
  }

  & > button {
    padding: 10px;
    background: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }
`;

const GridComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const SocialMediaComponent = styled.div`
  display: flex;
  justify-content: space-around;

  & > a {
    font-size: 20px;
    text-decoration: none;
    color: #007bff;
  }
`;

const Component = ({ type }) => {
  switch (type) {
    case 'text':
      return (
        <ComponentContainer>
          <TextComponent>Text Block</TextComponent>
        </ComponentContainer>
      );
    case 'image':
      return (
        <ComponentContainer>
          <ImageComponent />
        </ComponentContainer>
      );
    case 'button':
      return (
        <ComponentContainer>
          <ButtonComponent>Button</ButtonComponent>
        </ComponentContainer>
      );
    case 'header':
      return (
        <ComponentContainer>
          <HeaderComponent>Header</HeaderComponent>
        </ComponentContainer>
      );
    case 'footer':
      return (
        <ComponentContainer>
          <FooterComponent>Footer</FooterComponent>
        </ComponentContainer>
      );
    case 'carousel':
      return (
        <ComponentContainer>
          <CarouselComponent />
        </ComponentContainer>
      );
    case 'card':
      return (
        <ComponentContainer>
          <CardComponent>Card</CardComponent>
        </ComponentContainer>
      );
    case 'video':
      return (
        <ComponentContainer>
          <VideoComponent />
        </ComponentContainer>
      );
    case 'form':
      return (
        <ComponentContainer>
          <FormComponent>
            <input type="text" placeholder="Input field" />
            <textarea placeholder="Textarea field" />
            <button type="submit">Submit</button>
          </FormComponent>
        </ComponentContainer>
      );
    case 'grid':
      return (
        <ComponentContainer>
          <GridComponent>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
          </GridComponent>
        </ComponentContainer>
      );
    case 'social':
      return (
        <ComponentContainer>
          <SocialMediaComponent>
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
            <a href="#instagram">Instagram</a>
          </SocialMediaComponent>
        </ComponentContainer>
      );
    default:
      return null;
  }
};

export default Component;

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDrop } from 'react-dnd';
import update from 'immutability-helper';
import axios from 'axios';
import DraggableComponent from './DraggableComponent';
import TextComponent from './TextComponent';
import ImageComponent from './ImageComponent';
import ButtonComponent from './ButtonComponent';
import { HeaderComponent, FooterComponent } from './HeaderComponent';
import CarouselComponent from './CarouselComponent';
import CardComponent from './CardComponent';
import VideoComponent from './VideoComponent';
import FormComponent from './FormComponent';
import GridComponent from './GridComponent';
import SocialMediaComponent from './SocialMediaComponent';
import SEOSettings from './SEOSettings';
import './styles.css';
import { FaLaptopCode } from "react-icons/fa6";
import { FaTabletAlt } from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";
import CustomFileInput from './InputFile';
import { CiSaveDown2 } from "react-icons/ci";
import { CiSaveUp2 } from 'react-icons/ci';





const DeviceFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 10px solid ${(props) => (props.device === 'laptop' ? '#4A90E2' : props.device === 'tablet' ? '#E94E77' : '#F5A623')};
  border-radius: ${(props) => (props.device === 'laptop' ? '10px' : '5px')};
  width: ${(props) => (props.device === 'laptop' ? '1200px' : props.device === 'tablet' ? '800px' : '400px')};
  background: black;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  height:calc(100vh-70px);
  overflow-y:scroll;
`;
//  height: ${(props) => (props.device === 'laptop' ? '800px' : props.device === 'tablet' ? '600px' : '800px')};

const CanvasContainer = styled.div`
  flex: 1;
  background: #fafafa;
  height: 100vh; /* Ensure the canvas takes full height */
  overflow-y:scroll;
  background-color:black;
  color:white;
`;

const DeviceSelector = styled.div`
  margin:20px 0px;
`;

const Canvas = ({ components, setComponents }) => {
  const [seoData, setSeoData] = useState({
    title: '',
    description: '',
    keywords: '',
  });
  const [device, setDevice] = useState('laptop'); // State for selected device

  const [, drop] = useDrop(() => ({
    accept: 'COMPONENT',
    drop: (item) => {
      setComponents((prevComponents) => [
        ...prevComponents,
        { type: item.type, id: Date.now() },
      ]);
    },
  }));

  const moveComponent = (dragIndex, hoverIndex) => {
    const draggedComponent = components[dragIndex];
    setComponents(
      update(components, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, draggedComponent],
        ],
      })
    );
  };

  useEffect(() => {
    const designId = localStorage.getItem('designId');
    if (designId) {
      axios.get(`https://futuristic-labs-task-backendd.onrender.com/design/${designId}`)
        .then((response) => {
          const fetchedComponents = response.data.design.components || [];
          const fetchedSeoData = {
            title: response.data.design.title || '',
            description: response.data.design.desc || '',
            keywords: response.data.design.keywords ? response.data.design.keywords.join(', ') : '',
          };
          setComponents(fetchedComponents);
          setSeoData(fetchedSeoData);
        })
        .catch((error) => {
          console.error('Error fetching components:', error);
        });
    }
  }, [setComponents]);

  const saveComponents = () => {
    axios.post('https://futuristic-labs-task-backendd.onrender.com/design/new', {
      title: seoData.title,
      description: seoData.description,
      keywords: seoData.keywords.split(',').map(keyword => keyword.trim()),
      components: components
    })
    .then((response) => {
      const designId = response.data.design._id;
      localStorage.setItem('designId', designId);
      alert('Design saved!');
    })
    .catch((error) => {
      console.error('Error saving design:', error);
    });
  };

  const exportComponents = () => {
    const json = JSON.stringify(components);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'design.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const importComponents = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const importedComponents = JSON.parse(e.target.result);
        setComponents(importedComponents);
        alert('Design imported successfully!');
      };
      reader.readAsText(file);
    }
  };

  return (
    <DeviceFrame device={device}>
      <CanvasContainer ref={drop}>
        <div className="flex items-center mt-3 flex-row-reverse">
          <button className="px-3 py-1 bg-green-500 font-bold flex items-center mx-2 text-black" onClick={saveComponents}>
            <CiSaveDown2 />
            <span className={`${device == "mobile"?"hidden":"block"}`}>Save Design</span>
          </button>
          <button className="px-3 flex items-center py-1 bg-green-500 font-bold mx-2 text-black" onClick={exportComponents}>
            <CiSaveUp2 />
            <span className={`${device == "mobile"?"hidden":"inline-block"}`}>Export Design</span>
          </button>
          <CustomFileInput className="px-3 py-1" onFileChange={importComponents} />
        </div>
        <DeviceSelector className="flex items-center justify-center gap-2" >
          <button className="flex items-center bg-green-500 gap-1 text-black font-bold hover:text-white px-3 py-1" onClick={() => setDevice('laptop')}>
            <FaLaptopCode />
            <span className={`${device == "mobile"?"hidden":"block"}`}>Laptop</span>
          </button>
          <button className="flex items-center gap-1 bg-green-500 text-black font-bold hover:text-white px-3 py-1" onClick={() => setDevice('tablet')}>
            <FaTabletAlt />
            <span className={`${device == "mobile"?"hidden":"block"}`}>Tab</span>
          </button>
          <button className="flex items-center gap-1 bg-green-500 text-black font-bold hover:text-white px-3 py-1" onClick={() => setDevice('mobile')}>
            <FaMobileScreenButton />
            <span className={`${device == "mobile"?"hidden":"block"}`}>Mobile</span>
          </button>
        </DeviceSelector>
        
        <SEOSettings seoData={seoData} setSeoData={setSeoData} />
        {components.map((component, index) => {
          switch (component.type) {
            case 'text':
              return <DraggableComponent key={component.id} index={index} component={<TextComponent />} moveComponent={moveComponent} />;
            case 'image':
              return <DraggableComponent key={component.id} index={index} component={<ImageComponent />} moveComponent={moveComponent} />;
            case 'button':
              return <DraggableComponent key={component.id} index={index} component={<ButtonComponent text="Button" link="#" />} moveComponent={moveComponent} />;
            case 'header':
              return <DraggableComponent key={component.id} index={index} component={<HeaderComponent text="Header" link="#" />} moveComponent={moveComponent} />;
            case 'footer':
              return <DraggableComponent key={component.id} index={index} component={<FooterComponent text="Footer" link="#" />} moveComponent={moveComponent} />;
            case 'carousel':
              return <DraggableComponent key={component.id} index={index} component={<CarouselComponent images={["image1.jpg", "image2.jpg"]} />} moveComponent={moveComponent} />;
            case 'card':
              return <DraggableComponent key={component.id} index={index} component={<CardComponent title="Card Title" content="Card content here." image="image.jpg" />} moveComponent={moveComponent} />;
            case 'video':
              return <DraggableComponent key={component.id} index={index} component={<VideoComponent videoUrl="https://www.youtube.com/embed/videoID" />} moveComponent={moveComponent} />;
            case 'form':
              return <DraggableComponent key={component.id} index={index} component={<FormComponent />} moveComponent={moveComponent} />;
            case 'grid':
              return <DraggableComponent key={component.id} index={index} component={<GridComponent items={["Item 1", "Item 2", "Item 3"]} />} moveComponent={moveComponent} />;
            case 'social':
              return <DraggableComponent key={component.id} index={index} component={<SocialMediaComponent />} moveComponent={moveComponent} />;
            default:
              return null;
          }
        })}
      </CanvasContainer>
    </DeviceFrame>
  );
};

export default Canvas;

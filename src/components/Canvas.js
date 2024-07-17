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

const DeviceFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 10px solid ${(props) => (props.device === 'laptop' ? '#4A90E2' : props.device === 'tablet' ? '#E94E77' : '#F5A623')};
  border-radius: ${(props) => (props.device === 'laptop' ? '10px' : '5px')};
  width: ${(props) => (props.device === 'laptop' ? '1200px' : props.device === 'tablet' ? '800px' : '400px')};
  height: ${(props) => (props.device === 'laptop' ? '800px' : props.device === 'tablet' ? '600px' : '800px')};
  background: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
`;

const CanvasContainer = styled.div`
  flex: 1;
  padding: 20px;
  background: #fafafa;
  height: 100%; /* Ensure the canvas takes full height */
`;

const DeviceSelector = styled.div`
  margin-bottom: 20px;
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
      axios.get(`http://localhost:5001/design/${designId}`)
        .then((response) => {
          const fetchedComponents = response.data.design.components || [];
          setComponents(fetchedComponents);
        })
        .catch((error) => {
          console.error('Error fetching components:', error);
        });
    }
  }, [setComponents]);

  const saveComponents = () => {
    axios.post('http://localhost:5001/design/new', {
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
        <DeviceSelector>
          <button onClick={() => setDevice('laptop')}>Laptop</button>
          <button onClick={() => setDevice('tablet')}>Tablet</button>
          <button onClick={() => setDevice('mobile')}>Mobile</button>
        </DeviceSelector>
        <button onClick={saveComponents}>Save Design</button>
        <button onClick={exportComponents}>Export Design</button>
        <input type="file" accept=".json" onChange={importComponents} style={{ marginLeft: '10px' }} />
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

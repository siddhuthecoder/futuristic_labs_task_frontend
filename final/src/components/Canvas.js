import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDrop } from 'react-dnd';
import update from 'immutability-helper';
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
import SEOSettings from './SEOSettings';  // Importing the SEO component
import './styles.css';

const CanvasContainer = styled.div`
  flex: 1;
  padding: 20px;
  background: #fafafa;
  min-height: 100vh;
`;

const Canvas = ({ components, setComponents }) => {
  const [seoData, setSeoData] = useState({
    title: '',
    description: '',
    keywords: '',
  });

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

  // Load components from local storage
  useEffect(() => {
    const savedComponents = localStorage.getItem('savedComponents');
    if (savedComponents) {
      setComponents(JSON.parse(savedComponents));
    }
  }, [setComponents]);

  // Save components to local storage
  const saveComponents = () => {
    localStorage.setItem('savedComponents', JSON.stringify(components));
    alert('Design saved!');
  };

  // Export components as JSON
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

  // Import components from JSON
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
    <CanvasContainer ref={drop}>
      <button onClick={saveComponents}>Save Design</button>
      <button onClick={exportComponents}>Export Design</button>
      <input type="file" accept=".json" onChange={importComponents} style={{ marginLeft: '10px' }} />
      {/* SEO Settings Component */}
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
  );
};

export default Canvas;

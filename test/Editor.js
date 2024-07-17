import React, { useContext } from 'react';
import ButtonComponent from './ButtonComponent';
import CardComponent from './CardComponent';
import CarouselComponent from './CarouselComponent';
import { AppContext } from './context/AppContext';
import FormComponent from './FormComponent';
import GridComponent from './GridComponent';
import HeaderComponent from './HeaderComponent';
import ImageComponent from './ImageComponent';
import SocialMediaIconsComponent from './SocialMediaIconsComponent';
import TextBlockComponent from './TextBlockComponent';
import VideoEmbedComponent from './VideoEmbedComponent';

const Editor = () => {
  const { components, selectComponent } = useContext(AppContext);

  const renderComponent = (component) => {
    switch (component.type) {
      case 'text':
        return <TextBlockComponent component={component} />;
      case 'image':
        return <ImageComponent component={component} />;
      case 'button':
        return <ButtonComponent component={component} />;
      case 'header':
        return <HeaderComponent component={component} />;
      case 'carousel':
        return <CarouselComponent component={component} />;
      case 'card':
        return <CardComponent component={component} />;
      case 'video':
        return <VideoEmbedComponent component={component} />;
      case 'form':
        return <FormComponent component={component} />;
      case 'grid':
        return <GridComponent component={component} />;
      case 'socialMedia':
        return <SocialMediaIconsComponent component={component} />;
      default:
        return null;
    }
  };

  return (
    <div className="editor">
      {components.map((component) => (
        <div
          key={component.id}
          onClick={() => selectComponent(component)}
          style={{ border: '1px solid #ddd', margin: '10px 0', padding: '10px' }}
        >
          {renderComponent(component)}
        </div>
      ))}
    </div>
  );
};

export default Editor;

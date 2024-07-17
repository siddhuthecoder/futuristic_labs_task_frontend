import React from 'react';

const VideoEmbedComponent = ({ component }) => {
  return <iframe src={component.src || 'https://www.youtube.com/embed/dQw4w9WgXcQ'} title="Video Embed" style={{ ...component.style }} />;
};

export default VideoEmbedComponent;

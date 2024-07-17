import React from 'react';
import './styles.css'

const VideoComponent = ({ videoUrl }) => (
  <div className="video-component">
    <iframe src={videoUrl} title="video" width="100%" height="200px"></iframe>
  </div>
);

export default VideoComponent;

import React, { useState } from 'react';

const VideoComponent = ({ videoUrl }) => {
  const [url, setUrl] = useState(videoUrl);

  const getEmbedUrl = (inputUrl) => {
    const videoIdMatch = inputUrl.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^&\n]{11})/);
    if (videoIdMatch) {
      return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
    }
    return '';
  };

  const handleUrlChange = (e) => {
    const newUrl = e.target.value;
    const embedUrl = getEmbedUrl(newUrl);
    setUrl(embedUrl); // Update the url state to the embed URL
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: '10px' }}>
      <input
        type="text"
        value={url.startsWith('https://www.youtube.com/embed/') ? videoUrl : url}
        onChange={handleUrlChange}
        placeholder="Video URL"
        style={{
          backgroundColor: '#333',
          color: '#fff',
          border: 'none',
          padding: '10px',
          width: '100%',
          boxSizing: 'border-box',
          borderRadius: '4px',
          marginBottom: '10px'
        }}
      />
      {url && (
        <div>
          <iframe
            width="560"
            height="315"
            src={url}
            title="Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default VideoComponent;

import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { getCropedArea } from '../utils/getCroppedArea';

const ImageComponent = () => {
  const [src, setSrc] = useState('');
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(300);
  const [brightness, setBrightness] = useState(1); // Default 100%
  const [contrast, setContrast] = useState(1); // Default 100%

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setSrc(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleCrop = async () => {
    if (croppedAreaPixels) {
      const croppedImageUrl = await getCropedArea(src, croppedAreaPixels);
      setCroppedImage(croppedImageUrl);
    }
  };

  const handleResizeAndAdjust = () => {
    if (croppedImage) {
      const img = new Image();
      img.src = croppedImage;

      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        const newWidth = parseInt(width, 10);
        const newHeight = parseInt(height, 10);

        canvas.width = newWidth;
        canvas.height = newHeight;

        ctx.filter = `brightness(${brightness}) contrast(${contrast})`;
        ctx.drawImage(img, 0, 0, newWidth, newHeight);

        const adjustedImageUrl = canvas.toDataURL('image/png');
        setCroppedImage(adjustedImageUrl);
      };
    }
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {src && (
        <div style={{ position: 'relative', height: '400px', width: '100%', marginTop: '10px' }}>
          <Cropper
            image={src}
            crop={crop}
            zoom={zoom}
            aspect={4 / 3}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
          />
          <button onClick={handleCrop} style={{ position: 'absolute', top: '10px', left: '10px' }}>
            Crop Image
          </button>
        </div>
      )}
      {croppedImage && (
        <div style={{ marginTop: '10px' }}>
          <h3>Cropped Image:</h3>
          <img src={croppedImage} alt="Cropped" style={{ maxWidth: '100%' }} />
          <div>
            <h4>Resize Image:</h4>
            <input
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              placeholder="Width"
              style={{ marginRight: '10px' }}
            />
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Height"
              style={{ marginRight: '10px' }}
            />
            <button onClick={handleResizeAndAdjust}>Resize & Adjust Image</button>
          </div>
          <div>
            <h4>Adjust Image:</h4>
            <label>
              Brightness:
              <input
                type="range"
                min="0"
                max="2"
                step="0.1"
                value={brightness}
                onChange={(e) => setBrightness(e.target.value)}
                style={{ margin: '0 10px' }}
              />
            </label>
            <label>
              Contrast:
              <input
                type="range"
                min="0"
                max="2"
                step="0.1"
                value={contrast}
                onChange={(e) => setContrast(e.target.value)}
                style={{ margin: '0 10px' }}
              />
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageComponent;

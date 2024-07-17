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
    <div className="border border-gray-600 bg-gray-900 p-4 rounded-md text-white">
      <input type="file" accept="image/*" onChange={handleImageChange} className="mb-4" />
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
            classes={{
              containerClassName: 'bg-gray-800',
              cropAreaClassName: 'border-green-500',
            }}
          />
          <button onClick={handleCrop} className="absolute top-4 left-4 bg-green-500 px-4 py-2 rounded-md">
            Crop Image
          </button>
        </div>
      )}
      {croppedImage && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Cropped Image:</h3>
          <img src={croppedImage} alt="Cropped" className="mt-2 max-w-full" />
          <div className="mt-4">
            <h4 className="text-lg font-semibold">Resize Image:</h4>
            <div className="flex items-center flex-wrap gap-3 mt-2">
              <input
                type="number"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                placeholder="Width"
                className="px-3 py-2 mr-2 border rounded-md focus:outline-none text-black font-bold focus:border-green-500"
              />
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Height"
                className="px-3 py-2 mr-2 border rounded-md focus:outline-none text-black font-bold focus:border-green-500"
              />
              <button onClick={handleResizeAndAdjust} className="px-4 py-2 bg-green-500 text-white rounded-md">
                Resize & Adjust Image
              </button>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-semibold">Adjust Image:</h4>
              <div className="flex items-center mt-2">
                <label className="mr-4">
                  Brightness:
                  <input
                    type="range"
                    min="0"
                    max="2"
                    step="0.1"
                    value={brightness}
                    onChange={(e) => setBrightness(e.target.value)}
                    className="ml-2 appearance-none bg-gray-700 text-black h-2 w-full rounded-md"
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
                    className="ml-2 appearance-none bg-gray-700 h-2 w-full rounded-md"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageComponent;

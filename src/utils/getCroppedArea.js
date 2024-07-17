export const getCropedArea = (imageSrc, cropArea) => {
    return new Promise((resolve) => {
      const image = new Image();
      image.src = imageSrc;
      image.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Set canvas dimensions to the cropped area dimensions
        canvas.width = cropArea.width;
        canvas.height = cropArea.height;
  
        // Draw the cropped image
        ctx.drawImage(
          image,
          cropArea.x,
          cropArea.y,
          cropArea.width,
          cropArea.height,
          0,
          0,
          cropArea.width,
          cropArea.height
        );
  
        // Get the cropped image as a data URL
        const croppedImageUrl = canvas.toDataURL();
        resolve(croppedImageUrl);
      };
    });
  };
  
    
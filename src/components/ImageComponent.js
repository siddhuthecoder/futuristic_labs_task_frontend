    import React, { useState } from 'react';
    import ReactCrop from 'react-image-crop';
    import 'react-image-crop/dist/ReactCrop.css';
    import './styles.css'

    const ImageComponent = () => {
    const [crop, setCrop] = useState({ aspect: 16 / 9 });
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => setImage(reader.result);
        reader.readAsDataURL(file);
    };

    return (
        <div className="image-component">
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {image && (
            <ReactCrop src={image} crop={crop} onChange={setCrop} />
        )}
        </div>
    );
    };

    export default ImageComponent;

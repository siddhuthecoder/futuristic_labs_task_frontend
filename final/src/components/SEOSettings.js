import React from 'react';
import styled from 'styled-components';

const SEOContainer = styled.div`
  padding: 20px;
  background: #fff;
  border: 1px solid #ddd;
  margin-top: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
`;

const SEOSettings = ({ seoData, setSeoData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSeoData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <SEOContainer>
      <h3>SEO Settings</h3>
      <Input
        type="text"
        name="title"
        placeholder="SEO Title"
        value={seoData.title}
        onChange={handleChange}
      />
      <TextArea
        name="description"
        placeholder="SEO Description"
        rows="4"
        value={seoData.description}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="keywords"
        placeholder="SEO Keywords (comma separated)"
        value={seoData.keywords}
        onChange={handleChange}
      />
    </SEOContainer>
  );
};

export default SEOSettings;

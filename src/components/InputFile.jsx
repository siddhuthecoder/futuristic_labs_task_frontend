import React from 'react';
import styled from 'styled-components';
import { FaFileCode } from "react-icons/fa";


const FileInputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const StyledLabel = styled.label`
  color: white;
  border-radius: 5px;
  font-weight:700;
  color:black;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

const FileName = styled.span`
  margin-left: 10px;
`;

const CustomFileInput = ({ onFileChange }) => {
  const [fileName, setFileName] = React.useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName('');
    }
    onFileChange(event); // Call the parent's onFileChange function
  };

  return (
    <FileInputWrapper>
      <HiddenFileInput 
        type="file" 
        id="file" 
        accept=".json"
        onChange={handleFileChange} 
      />
      <StyledLabel className="bg-green-500 px-3 py-1 flex items-center gap-1" htmlFor="file">
        <FaFileCode />
        <span>Choose file</span>
      </StyledLabel>
      {fileName && <FileName>{fileName}</FileName>}
    </FileInputWrapper>
  );
};

export default CustomFileInput;

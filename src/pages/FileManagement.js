import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/listSlice";
import { useNavigate } from "react-router-dom";

const FileManagement = () => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (file) {
      dispatch(addItem({ name: file.name, size: file.size }));
      navigate("/list");
    }
  };

  return (
    <div>
      <h2>Upload a File</h2>
      <input type="file"  onChange={handleFileChange} />
      <button  onClick={handleSubmit}>Upload</button>
    </div>
  );
};

export default FileManagement;

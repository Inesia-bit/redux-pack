import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeBackground } from "../features/theme";

const ColorChange = () => {
  const [bgColor, setBgColor] = useState({ bgcolor: "", textcolor: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setBgColor({ ...bgColor, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeBackground(bgColor));
  };
  return (
    <div>
      <label htmlFor="bgcolor">Background Colour</label>
      <input type="text" name="bgcolor" id="" onChange={handleChange} />
      <label htmlFor="textcolor">Text Colour</label>
      <input type="text" name="textcolor" id="" onChange={handleChange} />
      <button onClick={handleSubmit}>change Background</button>
      <button onClick={handleSubmit}>change Text Color</button>
    </div>
  );
};

export default ColorChange;

import React from 'react';
// import Navbar from "../Navbar";
import ErrorHandling from "../ErrorHandling";
import ToDoList from "../ToDoList";
// import CaptureScreen from "../CaptureScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../About";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <CaptureScreen /> */}
        <Routes>
          <Route path="/" element={<ToDoList />}></Route>
          <Route path="/ErrorHandling" element={<ErrorHandling />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router;
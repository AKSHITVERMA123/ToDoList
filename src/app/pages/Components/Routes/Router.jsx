import React from 'react';
import ToDoList from "../ToDoList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ToDoList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router;
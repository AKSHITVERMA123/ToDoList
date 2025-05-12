import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ToDoList from "./pages/Components/ToDoList";

const AppRouter = () => {

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

export default AppRouter;
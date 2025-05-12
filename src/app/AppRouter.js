import React from 'react';
import About from "./pages/Components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const AppRouter = () => {

    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/About" element={<About />}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default AppRouter;
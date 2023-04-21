import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import CreatePost from "../pages/CreatePost/CreatePost";
import Login from "../pages/Login/Login";

const AppRouter = ({ setIsAuth }) => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        </Routes>
    );
}

export default AppRouter

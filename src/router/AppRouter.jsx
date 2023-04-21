import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import CreatePost from "../pages/CreatePost/CreatePost";
import Login from "../pages/Login/Login";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default AppRouter

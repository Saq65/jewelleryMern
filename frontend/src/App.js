import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./mainlayout/Main";
import Header from "./Components/layout/Header";
import Footer from "./Components/layout/Footer";
import Profile from "./Pages/auth/Profile";
import Signup from "./Pages/auth/Signup";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

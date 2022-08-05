import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminRoute from './components/AdminRoute';
import HomeScreen from './screens/HomeScreen';
import './App.css';
import ContactScreen from "./screens/ContactScreen";
import AboutUsScreen from "./screens/AboutUsScreen";
import BecomeVolunteerScreen from "./screens/BecomeVolunteerScreen";
import GallaryScreen from "./screens/GallaryScreen";
import OurTeamScreen from "./screens/OurTeamScreen";
import DonateScreen from "./screens/DonateScreen";
import RegisterScreen from "./screens/RegisterScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} exact />
        <Route path="/contact-us" element={<ContactScreen />} exact />
        <Route path="/about-us" element={<AboutUsScreen />} exact />
        <Route path="/become-volunteer" element={<BecomeVolunteerScreen />} exact />
        <Route path="/gallary" element={<GallaryScreen />} exact />
        <Route path="/our-team" element={<OurTeamScreen />} exact />
        <Route path="/donate" element={<DonateScreen />} exact />
        <Route path="/register" element={<RegisterScreen />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Navigation/Header";
import EventList from "./pages/EventList/EventList";
import EventFilter from "./pages/EventFilter/EventFilter";
import EventDetails from "./pages/EventDetails/EventDetails"


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
 
<Route path="/" element={<EventList/>}/>
<Route path="/find-events" element={<EventFilter/>} />
<Route path="/events/:id" element={<EventDetails/>}/>

      </Routes>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import ErrorPage from "../pages/ErrorPage";
import Navbar from "./Navbar";
import Index from "../pages/Index";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
      <Navbar />
         <Routes>
          <Route path ="/" element={<Index/>}/>

          <Route path ="/*" element={<ErrorPage />}/>
        </Routes>
      </Router>
    </>
  )
};

export default App;

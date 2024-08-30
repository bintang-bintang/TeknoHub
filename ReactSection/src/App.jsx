import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

// import Routes from "./Routes";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <Home/> */}
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
        <Footer />

      </BrowserRouter>
    </>
  )
}

export default App;
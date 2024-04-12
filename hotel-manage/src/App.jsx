import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listings from "./pages/Listings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Listings />} />
        // No need for additional routes if there are no other pages
      </Routes>
    </BrowserRouter>
  );
}

export default App;

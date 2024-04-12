import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listings from "./pages/Listings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Listings />} />
        // Define other routes as needed
      </Routes>
    </BrowserRouter>
  );
}

export default App;

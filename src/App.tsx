import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { AboutPage } from "./pages/AboutPage";
import { IconsPage } from "./pages/IconsPage";

function App() {
  return (
    <>
      <Navigation />
      {/* <React.StrictMode>
 <HashRouter> */}
 <Routes>
        <Route path="/" element={<IconsPage />} />
        <Route path="/about" element={<AboutPage />} />
</Routes>
 {/* </HashRouter>
 </React.StrictMode> */}
    </>
  );
}

export default App;



import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { AboutPage } from "./pages/AboutPage";
import { IconsPage } from "./pages/IconsPage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<IconsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;

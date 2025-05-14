import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import Contactpage from "./pages/Contactpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contactpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

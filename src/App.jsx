import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import Contactpage from "./pages/Contactpage";
import Solutionspage from "./pages/Solutionspage";
import Blogspage from "./pages/Blogspage";
import Careerspage from "./pages/Careerspage";
import RootLayout from "./layouts/RootLayout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/solutions" element={<Solutionspage />} />
          <Route path="/blogs" element={<Blogspage />} />
          <Route path="/careers" element={<Careerspage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

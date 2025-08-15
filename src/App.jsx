import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayout from "./layouts/RootLayout";
import Aboutpage from "./pages/AboutPage.jsx";
import Contactpage from "./pages/Contactpage.jsx";
import Careerspage from "./pages/CareersPage.jsx";
import Blogspage from "./pages/BlogsPage.jsx";
import Homepage from "./pages/HomePage.jsx";
import Solutionpage from "./pages/SolutionsPage.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/solutions" element={<Solutionpage />} />
          <Route path="/blogs" element={<Blogspage />} />
          <Route path="/careers" element={<Careerspage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

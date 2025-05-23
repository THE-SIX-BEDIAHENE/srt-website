import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPageTEMP.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import SolutionsPage from "./pages/SolutionsPage.jsx";
import BlogsPage from "./pages/BlogsPage.jsx";
import CareersPage from "./pages/CareersPage.jsx";
import RootLayout from "./layouts/RootLayout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

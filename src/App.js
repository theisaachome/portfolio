
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import Home from "./pages";
import SigninPage from "./pages/Signin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route  path="/signin" element={<SigninPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;

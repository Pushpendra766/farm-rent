import "./App.css";
import "./styles/styles.css";
import { Route, Routes } from "react-router";
import CategoryScreen from "./Screens/Category/CategoryScreen";
import Home from "./Screens/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Itemsbar from "./Components/Itemsbar/Itemsbar";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";
import HowItWorks from "./Components/HowItWorks/HowItWorks";
import Testimonials from "./Sections/Testimonials/Testimonials";
import Faq from "./Sections/Faq/Faq";
import Trending from "./Sections/Trending/Trending";
import TractorAnimation from "./Components/TractorAnimation/TractorAnimation";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Website loaded....");
  }, []);
  return (
    <div className="App">
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<CategoryScreen />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes> */}
      {/* <Itemsbar/> */}
      <Intro />
      {/* <TractorAnimation /> */}
      <Trending />
      <HowItWorks />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;

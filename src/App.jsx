import "./App.css";
import "./styles/styles.css";
import { Route, Routes } from "react-router";

import CategoryScreen from "./Screens/Category/CategoryScreen";

import Home from "./Screens/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<CategoryScreen />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

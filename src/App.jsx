import "./App.css";
import "./styles/styles.css";
import { Route, Routes } from "react-router";
import CategoryScreen from "./Screens/Category/CategoryScreen";
import Home from "./Screens/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import CategorySection from "./Components/CategorySection/CategorySection";
import Footer from "./Components/Footer/Footer"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <CategorySection />
      <CategorySection />
      <CategorySection />
      <Footer/>
    </div>
  );
}

export default App;

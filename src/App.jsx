import "./App.css";
import "./styles/styles.css";
import Navbar from "./Components/Navbar/Navbar";
import Itemsbar from  "./Components/Itemsbar/Itemsbar"
import CategorySection from "./Components/CategorySection/CategorySection";
import Footer from "./Components/Footer/Footer"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Itemsbar/>
      <img src="https://o.remove.bg/downloads/0ac4a62a-bccd-4f5d-946d-9e0a0fef7a24/pngtree-farm-house-png-image_5412129-removebg-preview.png"/>
     
      <CategorySection />
      <CategorySection />
      <CategorySection />
      <Footer/>
    </div>
  );
}

export default App;

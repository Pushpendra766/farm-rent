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
      <CategorySection />
      <CategorySection />
      <CategorySection />
      <Footer/>
    </div>
  );
}

export default App;

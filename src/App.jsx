import "./App.css";
import "./styles/styles.css";
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

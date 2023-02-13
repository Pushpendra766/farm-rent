import "./App.css";
import "./styles/styles.css";
import Navbar from "./Components/Navbar/Navbar";
import CategorySection from "./Components/CategorySection/CategorySection";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CategorySection />
      <CategorySection />
      <CategorySection />
    </div>
  );
}

export default App;

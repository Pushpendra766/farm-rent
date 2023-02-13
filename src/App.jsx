import { useState } from "react";
import "./App.css";
import "./styles/styles.css";

import CategorySection from './Components/CategorySection/index'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CategorySection/>
      <CategorySection/>
      <CategorySection/>
    </div>
  );
}

export default App;

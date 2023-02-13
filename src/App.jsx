import { useState } from "react";
import "./App.css";
import "./styles/styles.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p className="btn-primary" onClick={() => setCount(count + 1)}>
        Count : {count}
      </p>
    </div>
  );
}

export default App;

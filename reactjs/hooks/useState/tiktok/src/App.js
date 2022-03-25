import { useState } from "react";

const price = [500, 600, 700];

function App() {
  const [counter, setCounter] = useState(() => {
    const total = price.reduce((total, current) => total + current);
    return total;
  });

  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Click me!</button>
    </div>
  );
}

export default App;

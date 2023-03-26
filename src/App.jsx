import { useEffect, useState } from "react";
import Weather from "./components/Weather";

function App() {
  const [data, setData] = useState({});
  const [input, setInput] = useState("");

  const fetchData = async (e) => {
    if (e.key === "Enter") {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=d491a0ff9285e1d3975042bf0c2091eb`
      );
      const data = await response.json();
      setData(data);
    }
  };

  const changeTemperature = () => {
    fetchData("Enter");
  };
  return (
    <div className="App">
      <div className="input-container">
        <input
          className="input"
          value={input}
          type="text"
          placeholder="Ex.Santo Domingo"
          onKeyDown={fetchData}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="center">
        <Weather data={data} />
      </div>
    </div>
  );
}

export default App;

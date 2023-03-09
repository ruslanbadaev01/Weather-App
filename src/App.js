import React, { useState } from "react";
// import axios from "axios";

function App() {
  const [items, setItems] = useState();

  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=moscow&appid=c7b6361e3b02fd64ebb86ef3d9c1dddf";

  fetch(url)
    .then((response) => response.json())
    .then((res) => setItems(res));

  return <div className="App">{items.id}</div>;
}

export default App;

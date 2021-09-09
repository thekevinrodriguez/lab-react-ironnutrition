// src/App.js
import "./App.css";
import { Card, Row, Col, Divider, Input, Button } from "antd";
import data from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/Foodbox";

// EXAMPLE
// To start using the pre-made Ant Design components we must first import them:

function App() {
  const [meals, setMeals] = useState(data);
  // After importing the components we can render them directly:
  return (
    <div className="App">
      <h2> Iron Nurtition </h2>
      <row>
        {meals.map((meal, i) => (
          <div key={i}>
            <FoodBox food={meal} />
          </div>
        ))}
      </row>
    </div>
  );
}

export default App;

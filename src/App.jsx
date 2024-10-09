import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import FoodItems from "./FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {

  let [foodItems, setFoodItems] = useState([
    "Dal",
    "Green Vegetables",
    "Roti",
    "Salad",
    "Panner",
  ]);

  const onKeyDown=(event)=>{
    if(event.key==="Enter"){
      let newFoodItems=event.target.value;
      let newFoodItem=[...foodItems,newFoodItems];
      setFoodItems(newFoodItem);
      console.log("food craeted entered is",newFoodItems);
    }
    
  
  };

  return (
    <>
    <Container>
      <h1 className="food-heading">Healty Food</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
          <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        
      <FoodItems items={foodItems}></FoodItems>
      
    </Container> 

    
    </>
  );
}

export default App;

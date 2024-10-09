import React, { useState } from 'react';
import Item from './components/Item';

const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    // Check if the item is already in the activeItems array
    if (activeItems.includes(item)) {
      // If it is, remove it
      let newItems = activeItems.filter((activeItem) => activeItem !== item);
      setActiveItems(newItems);
    } else {
      // If it isn't, add it
      let newItems = [...activeItems, item];
      setActiveItems(newItems);
    }
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(event) => onBuyButton(item, event)}
        />
      ))}
    </ul>
  );
};

export default FoodItems;

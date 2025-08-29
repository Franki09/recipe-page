import React from "react";

function Ingredients() {
  return (
    <div className="my-6 mx-2">
      <h2 className="text-2xl text-brown font-bold mb-4">Ingredients</h2>
      <ul className="text-base text-stone-600 space-y-2">
        <li className="relative pl-8 before:content-['•'] before:absolute before:left-0 before:text-brown">2-3 large eggs</li>
        <li className="relative pl-8 before:content-['•'] before:absolute before:left-0 before:text-brown">Salt, to taste</li>
        <li className="relative pl-8 before:content-['•'] before:absolute before:left-0 before:text-brown">Pepper, to taste</li>
        <li className="relative pl-8 before:content-['•'] before:absolute before:left-0 before:text-brown">
          1 tablespoon of butter or oil
        </li>
        <li className="relative pl-8 before:content-['•'] before:absolute before:left-0 before:text-brown">
          Optional fillings: cheese, diced vegetables, cooked meats, herbs
        </li>
      </ul>
    </div>
  );
}

export default Ingredients;

import React from "react";

function Instructions() {
  return (
    <div className="my-6 mx-2">
      <h2 className="text-2xl text-brown font-bold mb-4">Instructions</h2>
      <ol className=" text-stone-600 text-base space-y-2 [counter-reset:item]">
        <li className="relative pl-8 [counter-increment:item] before:content-[counter(item)'.'] before:absolute before:left-0 before:text-brown before:font-bold">
          <strong>Beat the eggs:</strong> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You
          can add a tablespoon of water or milk for a fluffier texture.
        </li>
        <li className="relative pl-8 [counter-increment:item] before:content-[counter(item)'.'] before:absolute before:left-0 before:text-brown before:font-bold">
          <strong>Heat the pan:</strong> Place a non-stick frying pan over medium heat and add butter or oil.
        </li>
        <li className="relative pl-8 [counter-increment:item] before:content-[counter(item)'.'] before:absolute before:left-0 before:text-brown before:font-bold">
          <strong>Cook the omelette:</strong> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the
          eggs evenly coat the surface.
        </li>
        <li className="relative pl-8 [counter-increment:item] before:content-[counter(item)'.'] before:absolute before:left-0 before:text-brown before:font-bold">
          <strong>Add fillings (optional):</strong> When the eggs begin to set at the edges but are still slightly runny in the
          middle, sprinkle your chosen fillings over one half of the omelette.
        </li>
        <li className="relative pl-8 [counter-increment:item] before:content-[counter(item)'.'] before:absolute before:left-0 before:text-brown before:font-bold">
          <strong>Fold and serve:</strong> As the omelette continues to cook, carefully lift one edge and fold it over the
          fillings. Let it cook for another minute, then slide it onto a plate.
        </li>
        <li className="relative pl-8 [counter-increment:item] before:content-[counter(item)'.'] before:absolute before:left-0 before:text-brown before:font-bold">
          {" "}
          <strong>Enjoy:</strong> Serve hot, with additional salt and pepper if needed.
        </li>
      </ol>
    </div>
  );
}

export default Instructions;

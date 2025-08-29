import React from "react";

function PreparationTime() {
  return (
    <div className="bg-rose-50 rounded-lg p-6 mx-2">
      <h3 className="text-lg text-rose-800 font-bold mb-3">Preparation time</h3>
      <ul className="text-base text-stone-600 space-y-2">
        <li className="relative pl-8 before:content-['•'] before:absolute before:left-0 before:text-rose-800">
          <strong>Total:</strong> Approximately 10 minutes
        </li>
        <li className="relative pl-8 before:content-['•'] before:absolute before:left-0 before:text-rose-800">
          <strong>Preparation:</strong> 5 minutes
        </li>
        <li className="relative pl-8 before:content-['•'] before:absolute before:left-0 before:text-rose-800">
          <strong>Cooking:</strong> 5 minutes
        </li>
      </ul>
    </div>
  );
}

export default PreparationTime;

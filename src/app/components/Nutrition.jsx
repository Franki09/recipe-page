import React from "react";

function Nutrition() {
  return (
    <div className="mt-6 mx-2">
      <h2 className="text-2xl text-brown font-bold mb-4">Nutrition</h2>
      <p className="text-base text-stone-600 my-5 mx-2">
        The table below shows nutritional values per serving without the additional fillings.
      </p>
      <table className="w-full">
        <tbody>
          <tr className="border-b border-stone-200">
            <td className="py-3 text-stone-600 pl-10">Calories</td>
            <td className="py-3 text-brown font-bold text-right pr-[211px]">277kcal</td>
          </tr>

          <tr className="border-b border-stone-200">
            <td className="py-3 text-stone-600 pl-10">Carbs</td>
            <td className="py-3 text-brown font-bold text-right pr-[249px]">0g</td>
          </tr>

          <tr className="border-b border-stone-200">
            <td className="py-3 text-stone-600 pl-10">Protein</td>
            <td className="py-3 text-brown font-bold text-right pr-60">20g</td>
          </tr>

          <tr>
            <td className="py-3 text-stone-600 pl-10">Fat</td>
            <td className="py-3 text-brown font-bold text-right pr-60">22g</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Nutrition;

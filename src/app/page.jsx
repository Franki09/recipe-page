import Image from "next/image";
import Ingredients from "./components/Ingredients";
import Instructions from "./components/Instructions";
import Nutrition from "./components/Nutrition";
import PreparationTime from "./components/PrepTime";

export default function Home() {
  return (
    <div className="flex flex-col justify-center bg-white rounded-2xl max-w-3xl p-8 my-24">
      <Image
        src="/images/image-omelette.jpeg"
        alt="Omelette"
        width={700}
        height={800}
        className="rounded-lg mb-5 self-center my-3"
      />
      <h1 className="text-3xl font-bold text-stone-900 mx-2 ">Simple Omelette Recipe</h1>
      <p className="text-base text-stone-600 my-5 mx-2">
        An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally
        filled with your choice of cheese, vegetables, or meats.
      </p>

      <PreparationTime />
      <Ingredients />
      <hr />
      <Instructions />
      <hr />
      <Nutrition />
    </div>
  );
}

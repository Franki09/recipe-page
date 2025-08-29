import Image from "next/image";
import Ingredients from "./components/Ingredients";
import Instructions from "./components/Instructions";
import Nutrition from "./components/Nutrition";
import PreparationTime from "./components/PrepTime";

export default function Home() {
  return (
    <div className="bg-white rounded-lg w-fit p-5">
      <Image src="/images/image-omelette.jpeg" alt="Omelette" width={300} height={200} className="rounded-lg mb-5" />
      <h1>Simple Omelette Recipe</h1>
      <p>
        An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally
        filled with your choice of cheese, vegetables, or meats.
      </p>

      <PreparationTime />
      <Ingredients />
      <Instructions />
      <Nutrition />
    </div>
  );
}

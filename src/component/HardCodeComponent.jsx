import React from "react";

export const HardCodeComponent = () => {
  return (
    <div className="border border-black w-80 min-h-72 p-5 rounded-xl bg-darjeeling-tea bg-cover mx-3 my-5">
      <h1 className="font-bold text-center text-white text-2xl">
        Darjeeling Tea
      </h1>
      <h2 className="font-bold  text-white">Type</h2>
      <p className="pl-5 pb-2  text-white italic rounded-2xl backdrop-blur-xl ">
        Black Tea
      </p>
      <h2 className="font-bold  text-white">Origin</h2>
      <p className="pl-5 pb-2  text-white italic rounded-2xl backdrop-blur-xl">
        Darjeeling, India
      </p>
      <h2 className="font-bold  text-white">Best Time to Drink</h2>
      <p className="pl-5 pb-2  text-white italic rounded-2xl backdrop-blur-xl">
        Morning or Afternoon
      </p>
      <h2 className="font-bold  text-white ">Brewing Temperature</h2>
      <p className="pl-5 pb-2  text-white italic rounded-2xl backdrop-blur-xl">
        {" "}
        85-95°C (185-203°F)
      </p>
      <h2 className="font-bold  text-white">Caffeine Level</h2>
      <p className="pl-5 pb-2  text-white italic rounded-2xl backdrop-blur-xl">
        Medium
      </p>
      <h2 className="font-bold  text-white">Description</h2>
      <p className="pl-5 pb-2  text-white italic rounded-2xl backdrop-blur-xl">
        Known as the "Champagne of Teas," Darjeeling tea is renowned for its
        delicate and complex flavor profile. It has a light body with floral,
        fruity, and muscatel notes. The tea is often enjoyed without milk to
        preserve its nuanced flavors.
      </p>
    </div>
  );
};

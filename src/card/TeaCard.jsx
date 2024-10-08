import React from "react";

export const TeaCard = ({
  teaName,
  teaType,
  teaOrigin,
  teaTime,
  teaTemperature,
  teaCaffineLevel,
  teaDescription,
  teaBackground,
  cardKey,
}) => {
  const teaDetails = [
    { Type: teaType },
    { Origin: teaOrigin },
    { "Best Time to Drink": teaTime },
    { "Brewing Temperature": teaTemperature },
    { "Caffeine Level": teaCaffineLevel },
    { Description: teaDescription },
  ];
  return (
    <div
      className={`border border-black w-80 min-h-72 p-5 rounded-xl  bg-cover mx-3 my-5 ${teaBackground} bg-center`}
      key={cardKey}
    >
      <h1 className="font-bold text-center text-white text-2xl">{teaName}</h1>
      {teaDetails.map((data, index) => {
        const key1 = Object.keys(data)[0];
        const value = data[key1];
        return (
          <>
            <div key={index}>
              <h2 className="font-bold  text-white">{key1}</h2>
              <p className="px-5 py-1  text-white italic rounded-2xl backdrop-blur-xl ">
                {value}
              </p>
            </div>
          </>
        );
      })}
    </div>
  );
};

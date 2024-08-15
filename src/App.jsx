import { TeaCard } from "./card/TeaCard";
import { HardCodeComponent } from "./component/HardCodeComponent";
function App() {
  const allTeaList = [
    {
      name: "Matcha",
      type: "Green Tea (Powdered)",
      origin: "Japan",
      description:
        "Matcha is a finely ground powder made from shade-grown green tea leaves. It has a vibrant green color and a rich, umami flavor with a slight sweetness. Traditionally used in Japanese tea ceremonies, matcha is also popular in lattes, smoothies, and desserts.",
      best_time_to_drink: "Morning or Early Afternoon",
      brewing_temperature: "70-80°C (158-176°F)",
      caffeine_level: "High",
      image: "bg-matcha-tea",
    },
    {
      name: "Oolong Tea",
      type: "Oolong Tea (Semi-Oxidized)",
      origin: "Fujian, China",
      description:
        "Oolong tea is semi-oxidized, placing it between black and green tea in terms of flavor and color. It has a rich, complex flavor that can range from fruity and floral to roasted and earthy, depending on the level of oxidation.",
      best_time_to_drink: "After Meals",
      brewing_temperature: "85-90°C (185-194°F)",
      caffeine_level: "Medium",
      image: "bg-oolong-tea",
    },
    {
      name: "Rooibos Tea",
      type: "Herbal Tea",
      origin: "South Africa",
      description:
        "Also known as 'Red Bush Tea,' Rooibos is a naturally caffeine-free herbal tea with a sweet, nutty flavor. It has a rich red color when brewed and is often enjoyed with a dash of honey or milk.",
      best_time_to_drink: "Evening or Before Bed",
      brewing_temperature: "95°C (203°F)",
      caffeine_level: "Caffeine-Free",
      image: "bg-rooibos-tea",
    },
    {
      name: "Chamomile Tea",
      type: "Herbal Tea",
      origin: "Egypt",
      description:
        "Chamomile tea is made from the dried flowers of the chamomile plant. It has a mild, floral flavor with a hint of apple-like sweetness. Known for its calming properties, chamomile tea is often consumed before bedtime to promote relaxation and sleep.",
      best_time_to_drink: "Evening or Before Bed",
      brewing_temperature: "90-95°C (194-203°F)",
      caffeine_level: "Caffeine-Free",
      image: "bg-chamomile-tea",
    },
  ];
  return (
    <>
      <div>
        <h1 className="p-5 text-3xl font-bold text-center text-white backdrop-blur-xl">
          Tea Display
        </h1>
        <div className="flex flex-wrap p-5 justify-evenly">
          <HardCodeComponent />
          {allTeaList.map((data, index) => {
            const name = data[Object.keys(data)[0]];
            const type = data[Object.keys(data)[1]];
            const origin = data[Object.keys(data)[2]];
            const description = data[Object.keys(data)[3]];
            const time = data[Object.keys(data)[4]];
            const temperature = data[Object.keys(data)[5]];
            const caffine = data[Object.keys(data)[6]];
            const image = data[Object.keys(data)[7]];

            return (
              <TeaCard
                cardKey={index}
                teaName={name}
                teaType={type}
                teaCaffineLevel={caffine}
                teaTemperature={temperature}
                teaDescription={description}
                teaOrigin={origin}
                teaTime={time}
                teaBackground={image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;

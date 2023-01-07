import { useState } from "react";

import "./Foods.scss";
import { Header, SelectedFood } from "../../Components";
import { foods } from "../../data/dummy";

const Foods = () => {
  const [selectedFood, setSelectedFood] = useState(null);

  console.log(selectedFood);
  return (
    <div className="outlet app__foods">
      <Header title="Foods" />
      <div className="foods__container">
        {foods.map((food) => (
          <div
            key={food.id}
            className={`food__container food${food.id}`}
            onClick={() => setSelectedFood(food)}
          >
            <img src={food.image} alt="" />
            <p>{food.name}</p>

            <span>${food.price}</span>
          </div>
        ))}
      </div>

      <SelectedFood food={selectedFood} setSelectedFood={setSelectedFood} />
    </div>
  );
};

export default Foods;

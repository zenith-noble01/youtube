import "./SelectedFood.scss";
import { FaInfo } from "react-icons/fa";

const SelectedFood = ({ food, setSelectedFood }) => {
  return (
    <div
      className="food__selected__container"
      style={{ left: food ? "0" : "-100vw" }}
    >
      <div className="cancel" onClick={() => setSelectedFood(null)}></div>
      <div className="select__container">
        <FaInfo className="i" />

        <div className="selected">
          <div className="selected__top">
            <img src={food?.image} alt="" />

            <p>
              {food?.name} <span>${food?.price}</span>
            </p>
          </div>
          <div className="selected__inner">
            {food?.details.map((detail) => (
              <div className="selected__detail" key={detail.id}>
                <div className="text__container">
                  <img src={detail.image} alt="" />
                  <p>{detail.desc}</p>
                </div>
                <div className="btn__container">
                  <button className="btn">-</button>
                  <button className="btn">+</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="addToCart">Add order</button>
      </div>
    </div>
  );
};

export default SelectedFood;

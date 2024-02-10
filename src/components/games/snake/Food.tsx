import { FC } from "react";

import { IFoodProps } from "./snake.types";

const FOOD_COLOR = {
  apple: "bg-red-500",
  pear: "bg-yellow-500",
  watermelon: "bg-green-500"
};

const Food: FC<IFoodProps> = ({ type }) => {
  return (
    <div
      className={`w-5 h-5 border-[1px] border-solid ${FOOD_COLOR[type]}`}
    ></div>
  );
};

export default Food;

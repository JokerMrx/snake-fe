export type FoodType = "apple" | "pear" | "watermelon";

export interface IFoodProps {
  type: FoodType;
}

export interface IPlayingFieldProps {
  isPlay: boolean;
  register: (value: boolean) => void;
}

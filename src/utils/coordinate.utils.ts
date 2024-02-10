import { I2DCoordinate } from "../types/types";

export const generate2DCoordinate = (limit: number) => {
  const xFoodPosition = Math.floor(Math.random() * limit);
  const yFoodPosition = Math.floor(Math.random() * limit);

  return [xFoodPosition, yFoodPosition];
};

export const checkRenderObject = (
  foodPosition: I2DCoordinate,
  row: number,
  col: number
) => foodPosition.x === row && foodPosition.y === col;

export const checkIntersectionCoordinates = (
  object1: I2DCoordinate,
  object2: I2DCoordinate
) => {
  return object1.x === object2.x && object1.y === object2.y;
};

import { FC, useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";

import Food from "./Food";

import { DIRECTION, LOGIN_PAGE } from "../../../constants";
import { GAME_NAME_SNAKE, SNAKE_GAME } from "../../../data/games.data";
import {
  INITIAL_SNAKE_POSITION,
  TIME_UPDATE_GAME,
  QUANTITY_SCORE_FOOD,
  MAX_SNAKE_SPEED,
  SPEED_INCREMENT_THRESHOLD,
  FOOD,
  CHANGE_SNAKE_SPEED
} from "./snake.data";
import { FoodType, IPlayingFieldProps } from "./snake.types";
import { DirectionType } from "../../../types/types";
import {
  checkRenderObject,
  checkIntersectionCoordinates,
  generate2DCoordinate
} from "../../../utils/coordinate.utils";
import { getUserDataFromUserToken } from "../../../utils/user.utils";
import { saveGameResult } from "../../../services/api/game.api";

const PlayingField: FC<IPlayingFieldProps> = ({ isPlay, register }) => {
  const [snakePosition, setSnakePosition] = useState(INITIAL_SNAKE_POSITION);
  const [applePosition, setApplePosition] = useState({ x: 15, y: 18 });
  const [pearPosition, setPearPosition] = useState({ x: 10, y: 2 });
  const [watermelonPosition, setWatermelonPosition] = useState({ x: 5, y: 5 });
  const [score, setScore] = useState(0);
  const [direction, setDirection] = useState<DirectionType>(DIRECTION.UP);
  const [snakeSpeed, setSnakeSpeed] = useState(TIME_UPDATE_GAME);
  const [currentScore, setCurrentScore] = useState(0); // variable responsible for updating the speed of the snake every 50 points

  const navigate = useNavigate();

  const userData = getUserDataFromUserToken();

  if (!userData) navigate(LOGIN_PAGE);

  useEffect(() => {
    let updateInterval: number | undefined;

    if (isPlay) {
      updateInterval = setInterval(updateGame, snakeSpeed);
    } else {
      clearInterval(updateInterval);
    }

    return () => clearInterval(updateInterval);
  });

  useEffect(() => {
    document.addEventListener("keydown", updateDirection);
    return () => document.removeEventListener("keydown", updateDirection);
  });

  const increaseSnakeSpeed = () => {
    if (snakeSpeed > MAX_SNAKE_SPEED)
      setSnakeSpeed(prev => prev - CHANGE_SNAKE_SPEED);
  };

  const renderPlayingField = () => {
    const cellArray = [];
    for (let row = 0; row < SNAKE_GAME.PLAYING_FIELD_SIZE; row++) {
      for (let col = 0; col < SNAKE_GAME.PLAYING_FIELD_SIZE; col++) {
        let stylesCell = "h-5 w-5 border-[1px] border-solid bg-[#ccc]";

        const isSnake = snakePosition.some(item =>
          checkRenderObject(item, row, col)
        );

        if (isSnake) {
          const isSnakeHead = checkRenderObject(snakePosition[0], row, col);

          if (isSnakeHead) stylesCell += " bg-zinc-900";
          else stylesCell += " bg-zinc-700";
        }

        const isApple = checkRenderObject(applePosition, row, col);
        const isPear = checkRenderObject(pearPosition, row, col);
        const isWatermelon = checkRenderObject(watermelonPosition, row, col);

        if (isApple) {
          cellArray.push(
            <Fragment key={`${row}-${col}`}>
              <Food type="apple" />
            </Fragment>
          );
          continue;
        }

        if (isPear) {
          cellArray.push(
            <Fragment key={`${row}-${col}`}>
              <Food type="pear" />
            </Fragment>
          );
          continue;
        }

        if (isWatermelon) {
          cellArray.push(
            <Fragment key={`${row}-${col}`}>
              <Food type="watermelon" />
            </Fragment>
          );
          continue;
        }

        cellArray.push(
          <div key={`${row}-${col}`} className={stylesCell}></div>
        );
      }
    }
    return cellArray;
  };

  const updateDirection = (e: KeyboardEvent) => {
    if (!isPlay) return;

    switch (e.key) {
      case "ArrowUp":
        if (direction === DIRECTION.DOWN) return;
        setDirection(DIRECTION.UP);
        break;
      case "ArrowDown":
        if (direction === DIRECTION.UP) return;
        setDirection(DIRECTION.DOWN);
        break;
      case "ArrowLeft":
        if (direction === DIRECTION.RIGHT) return;
        setDirection(DIRECTION.LEFT);
        break;
      case "ArrowRight":
        if (direction === DIRECTION.LEFT) return;
        setDirection(DIRECTION.RIGHT);
        break;
    }
  };

  const renderFood = (foodType: FoodType) => {
    let isContinueLoop = true;
    let newFoodPosition = { x: -1, y: -1 };

    while (isContinueLoop) {
      const [xFoodPosition, yFoodPosition] = generate2DCoordinate(
        SNAKE_GAME.PLAYING_FIELD_SIZE
      );
      newFoodPosition = { x: xFoodPosition, y: yFoodPosition };

      const isCrossingApple = checkIntersectionCoordinates(
        newFoodPosition,
        applePosition
      );
      const isCrossingPear = checkIntersectionCoordinates(
        newFoodPosition,
        pearPosition
      );
      const isCrossingWatermelon = checkIntersectionCoordinates(
        newFoodPosition,
        watermelonPosition
      );
      const isCrossingSnake = snakePosition.some(item =>
        checkIntersectionCoordinates(newFoodPosition, item)
      );

      isContinueLoop =
        isCrossingApple ||
        isCrossingPear ||
        isCrossingWatermelon ||
        isCrossingSnake;
    }

    switch (foodType) {
      case "apple": {
        setApplePosition(newFoodPosition);
        break;
      }
      case "pear": {
        setPearPosition(newFoodPosition);
        break;
      }
      case "watermelon": {
        setWatermelonPosition(newFoodPosition);
        break;
      }
    }
  };

  const gameOver = async () => {
    resetScore();
    setDirection(DIRECTION.UP);
    setSnakePosition(INITIAL_SNAKE_POSITION);
    notificationGameOver();
    setSnakeSpeed(TIME_UPDATE_GAME);
    setCurrentScore(0);

    await saveGameResult({
      game_name: GAME_NAME_SNAKE,
      score: score
    }).then(res => res);

    register(false);
  };

  const notificationGameOver = () => {
    alert(`Game Over! Score: ${score}`);
  };

  const checkCollides = () => {
    if (
      snakePosition[0].x < 0 ||
      snakePosition[0].x > SNAKE_GAME.PLAYING_FIELD_SIZE ||
      snakePosition[0].y < 0 ||
      snakePosition[0].y > SNAKE_GAME.PLAYING_FIELD_SIZE
    ) {
      gameOver();
      return;
    }

    const isCollides = snakePosition
      .slice(1)
      .some(item => checkIntersectionCoordinates(item, snakePosition[0]));

    if (isCollides) {
      gameOver();
      return;
    }
  };

  const updateGame = () => {
    checkCollides();

    const newSnakePosition = [...snakePosition];

    switch (direction) {
      case DIRECTION.UP:
        newSnakePosition.unshift({
          x: snakePosition[0].x - 1,
          y: snakePosition[0].y
        });
        break;
      case DIRECTION.DOWN:
        newSnakePosition.unshift({
          x: snakePosition[0].x + 1,
          y: snakePosition[0].y
        });
        break;
      case DIRECTION.LEFT:
        newSnakePosition.unshift({
          x: snakePosition[0].x,
          y: snakePosition[0].y - 1
        });
        break;
      case DIRECTION.RIGHT:
        newSnakePosition.unshift({
          x: snakePosition[0].x,
          y: snakePosition[0].y + 1
        });
        break;
    }

    const isAteApple = checkIntersectionCoordinates(
      newSnakePosition[0],
      applePosition
    );
    const isAtePear = checkIntersectionCoordinates(
      newSnakePosition[0],
      pearPosition
    );
    const isAteWatermelon = checkIntersectionCoordinates(
      newSnakePosition[0],
      watermelonPosition
    );

    if (isAteApple) {
      increaseScore(QUANTITY_SCORE_FOOD.APPLE);
      renderFood(FOOD.APPLE);
    } else if (isAtePear) {
      increaseScore(QUANTITY_SCORE_FOOD.PEAR);
      renderFood(FOOD.PEAR);
    } else if (isAteWatermelon) {
      increaseScore(QUANTITY_SCORE_FOOD.WATERMELON);
      renderFood(FOOD.WATERMELON);
    } else {
      newSnakePosition.pop();
    }

    setSnakePosition(newSnakePosition);
  };

  const increaseScore = (value: number): void => {
    setCurrentScore(prev => prev + value);

    if (currentScore >= SPEED_INCREMENT_THRESHOLD) {
      increaseSnakeSpeed();
      setCurrentScore(currentScore % SPEED_INCREMENT_THRESHOLD);
    }

    setScore(prev => prev + value);
  };

  const resetScore = () => setScore(0);

  return (
    <>
      <p className="text-xl">
        Score: <span>{score}</span>
      </p>
      <div
        className="grid gap-[1px] bg-[#ddd]"
        style={{
          gridTemplateColumns: `repeat(${SNAKE_GAME.PLAYING_FIELD_SIZE}, 20px)`,
          gridTemplateRows: `repeat(${SNAKE_GAME.PLAYING_FIELD_SIZE}, 20px)`
        }}
      >
        <>{renderPlayingField()}</>
      </div>
    </>
  );
};

export default PlayingField;

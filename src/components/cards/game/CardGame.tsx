import { FC, Fragment } from "react";
import { Link } from "react-router-dom";

import StarIcon from "../../../assets/icons/star-icon.svg?react";

import { PAGE_GAMES } from "../../../constants";
import { ICardGameProps } from "./card-game.types";

const CardGame: FC<ICardGameProps> = ({
  name,
  description,
  image,
  id,
  rating = 0
}) => {
  return (
    <div className="wrapper max-w-xs bg-neutral-800 rounded-b-md shadow-lg overflow-hidden">
      <div>
        <img src={image} alt={name} />
      </div>
      <div className="p-3 space-y-3">
        <h3 className="text-gray-100 font-semibold text-md">{name}</h3>
        <p className="text-sm text-gray-300 leading-sm">{description}</p>
        <p>
          <span className="flex">
            {Array(rating)
              .fill(0)
              .map((_, index) => (
                <Fragment key={index}>
                  <StarIcon className="h-5 text-sky-600" />
                </Fragment>
              ))}
          </span>
        </p>
      </div>
      <Link
        className="bg-sky-600 bg- w-full flex justify-center py-2 text-white font-semibold transition duration-300 hover:bg-sky-500"
        to={`${PAGE_GAMES}/${id}`}
      >
        Playing
      </Link>
    </div>
  );
};

export default CardGame;

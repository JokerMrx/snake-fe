import { Fragment } from "react";

import LayoutPage from "../../components/layout/LayoutPage";
import CardGame from "../../components/cards/game/CardGame";

import { GAMES } from "../../data/games.data";

const HomePage = () => {
  return (
    <LayoutPage>
      <div className="mt-10">
        <h2 className="text-4xl text-center">Game List</h2>
        <div className="mt-10">
          {GAMES?.map((game, index) => (
            <Fragment key={index}>
              <CardGame
                name={game.name}
                image={game.image}
                id={game.id}
                description={game.description}
                rating={game.rating}
              />
            </Fragment>
          ))}
        </div>
      </div>
    </LayoutPage>
  );
};

export default HomePage;

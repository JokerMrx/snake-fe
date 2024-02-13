import { useState } from "react";
import { useNavigate } from "react-router-dom";

import LayoutPage from "../../../components/layout/LayoutPage";
import Button from "../../../components/ui/buttons/button/Button";
import PlayingField from "../../../components/games/snake/PlayingField";
import { getUserDataFromUserToken } from "../../../utils/user.utils";
import { LOGIN_PAGE } from "../../../constants";

const SnakeGamePage = () => {
  const [isPlay, setPlay] = useState(false);

  const navigate = useNavigate();

  const userData = getUserDataFromUserToken();

  if (!userData) navigate(LOGIN_PAGE);

  const handleClickPlay = () => {
    setPlay(!isPlay);
  };

  return (
    <LayoutPage>
      <div className="mt-10">
        <h2 className="text-4xl text-center">Snake Game</h2>
        <div className="mt-10 flex flex-col items-center gap-8">
          <div className="min-w-96 min-h-96 bg-neutral-700">
            <PlayingField isPlay={isPlay} register={value => setPlay(value)} />
          </div>
          <div className="inline-flex">
            <Button
              variant={isPlay ? "warning" : "success"}
              onClick={handleClickPlay}
            >
              {isPlay ? "Pause" : "Play"}
            </Button>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
};

export default SnakeGamePage;

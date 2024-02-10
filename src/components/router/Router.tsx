import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "../../views/home/HomePage";
import TopPlayersPage from "../../views/top/TopPlayersPage";
import SnakeGamePage from "../../views/games/snake/SnakeGamePage";
import NotFoundPage from "../../views/error/not-found/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/top-players",
    element: <TopPlayersPage />
  },
  {
    path: "/games/snake",
    element: <SnakeGamePage />
  },
  {
    path: "*",
    element: <NotFoundPage />
  }
]);

const Router = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default Router;

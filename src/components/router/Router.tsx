import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "../../views/home/HomePage";
import TopPlayersPage from "../../views/top/TopPlayersPage";
import SnakeGamePage from "../../views/games/snake/SnakeGamePage";
import NotFoundPage from "../../views/error/not-found/NotFoundPage";
import LoginPage from "../../views/auth/LoginPage";
import RegisterPage from "../../views/auth/RegisterPage";
import HoldersPage from "../../views/games/holders/HoldersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/top-players",
    element: <TopPlayersPage />
  },
  {
    path: "/games/holders",
    element: <HoldersPage />
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

import { useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";

import { IGameResult } from "../../../types/game.types";
import LayoutPage from "../../../components/layout/LayoutPage";
import { getHoldersGameResult } from "../../../services/api/game.api";
import { GAME_NAME_SNAKE, TABLE_HEAD_HOLDERS } from "../../../data/games.data";
import Table from "../../../components/tables/Table";
import TableRow from "../../../components/tables/TableRow";
import TableColumn from "../../../components/tables/TableColumn";
import Loader from "../../../components/ui/loader/Loader";
import { getUserDataFromUserToken } from "../../../utils/user.utils";
import { LOGIN_PAGE } from "../../../constants";

const HoldersPage = () => {
  const [holders, setHolders] = useState<IGameResult[] | null>(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const userData = getUserDataFromUserToken();

  if (!userData) navigate(LOGIN_PAGE);

  useEffect(() => {
    setLoading(true);

    getHoldersGameResult(GAME_NAME_SNAKE).then(res => {
      if (res.status === 200) {
        setHolders(res.data);
      }
      setLoading(false);
    });
  }, []);

  return (
    <LayoutPage>
      <div>
        <h2 className="mt-10 text-center text-3xl">Holders</h2>
        <div className="mt-10 px-5">
          {!loading ? (
            <Table tableHead={TABLE_HEAD_HOLDERS}>
              {holders ? (
                holders.map((item, index) => (
                  <Fragment key={index}>
                    <TableRow>
                      <TableColumn>{item.user.nickname}</TableColumn>
                      <TableColumn>{item.game_name}</TableColumn>
                      <TableColumn>{item.score}</TableColumn>
                    </TableRow>
                  </Fragment>
                ))
              ) : (
                <p>Not Found!</p>
              )}
            </Table>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </LayoutPage>
  );
};

export default HoldersPage;

import { FC } from "react";
import { ITableProps } from "./table.types";
const Table: FC<ITableProps> = ({ tableHead, children }) => {
  return (
    <table className="min-w-full bg-white">
      <thead className="bg-zinc-800 text-white">
        <tr>
          {tableHead.map((item, index) => (
            <th
              className="text-left py-3 px-4 uppercase font-semibold text-sm"
              key={index}
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-gray-800 dark:text-white bg-zinc-300 dark:bg-zinc-700">
        <>{children}</>
      </tbody>
    </table>
  );
};

export default Table;

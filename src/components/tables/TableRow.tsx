import { ReactNode } from "react";

const TableRow = ({ children }: { children?: ReactNode }) => {
  return (
    <tr className="border-solid border-b-[1px] border-zinc-700 dark:border-zinc-200">
      <>{children}</>
    </tr>
  );
};

export default TableRow;

import { ReactNode } from "react";

const TableColumn = ({ children }: { children?: ReactNode }) => {
  return (
    <td className="text-left py-3 px-4">
      <>{children}</>
    </td>
  );
};

export default TableColumn;

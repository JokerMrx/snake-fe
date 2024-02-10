import { ReactNode } from "react";

import Navbar from "../navbar/Navbar";

const LayoutPage = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="max-w-screen-xl w-full min-h-screen">
        <>{children}</>
      </main>
    </>
  );
};

export default LayoutPage;

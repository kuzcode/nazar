import { Outlet } from "react-router-dom";

import Topbar from "@/components/shared/Topbar";

const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      <Topbar />
      <section className="flex flex-1 h-full">
        <Outlet />
      </section>
    </div>
  );
};

export default RootLayout;

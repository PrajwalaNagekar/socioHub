import { useState } from "react";
import { Outlet } from "react-router-dom";

import SidebarDesktop from "@/pages/user/Dashboard/SidebarDesktop";
import SidebarMobile from "@/pages/user/Dashboard/SidebarMobile";
import Navbar from "@/pages/user/Dashboard/Navbar";

const AppLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <SidebarDesktop />


      <SidebarMobile
        open={sidebarOpen}
        onOpenChange={setSidebarOpen}
      />


      <div className="flex flex-col flex-1">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 overflow-auto bg-muted p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;

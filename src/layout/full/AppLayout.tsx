import { useState } from "react";
import { Outlet } from "react-router-dom";

import SidebarDesktop from "@/pages/user/Dashboard/SidebarDesktop";
import SidebarMobile from "@/pages/user/Dashboard/SidebarMobile";
import Navbar from "@/pages/user/Dashboard/Navbar";

const AppLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-muted/40 text-foreground selection:bg-primary/20 selection:text-primary">
      {/* Desktop Sidebar Floating Container */}
      <div className="hidden lg:flex p-4 lg:pr-6 h-full">
        <SidebarDesktop />
      </div>

      <SidebarMobile
        open={sidebarOpen}
        onOpenChange={setSidebarOpen}
      />

      <div className="flex flex-col flex-1 relative min-w-0">
        {/* Floating Navbar Container */}
        <div className="p-4 pb-0 lg:p-4 lg:pl-0 z-20">
          <Navbar onMenuClick={() => setSidebarOpen(true)} />
        </div>

        {/* Floating Main Content Container */}
        <main className="flex-1 overflow-auto p-4 lg:p-4 lg:pl-0 lg:pt-2 custom-scrollbar relative z-10 block">
          <div className="w-full min-h-[calc(100%-2rem)] md:min-h-full rounded-[2.5rem] bg-background/95 backdrop-blur-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20 dark:border-white/10 p-6 md:p-10 relative overflow-hidden">
            {/* Subtle layout decorative gradient */}
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 mix-blend-multiply dark:mix-blend-screen pointer-events-none"></div>
            <div className="max-w-7xl mx-auto w-full h-full">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;

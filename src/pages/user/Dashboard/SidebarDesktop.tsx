import { Command } from "lucide-react";
import SidebarContent from "./SidebarContent";

const SidebarDesktop = () => {
  return (
    <aside className="h-full w-[280px] flex flex-col rounded-[2.5rem] bg-background/80 backdrop-blur-2xl border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:border-white/10 relative overflow-hidden transition-all">
      {/* Decorative Blobs */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="h-28 px-8 flex items-center gap-4 font-bold text-2xl tracking-tight z-10 pt-4">
        <div className="flex bg-gradient-to-br from-primary to-primary/80 items-center justify-center p-3 rounded-2xl shadow-lg shadow-primary/30 text-primary-foreground transform transition-transform hover:scale-105 hover:rotate-3 cursor-pointer">
          <Command className="w-6 h-6" />
        </div>
        <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
          SocioHub
        </span>
      </div>

      <div className="p-5 flex-1 overflow-y-auto custom-scrollbar z-10">
        <div className="text-[11px] font-bold text-muted-foreground/60 uppercase tracking-[0.2em] mb-4 px-4 mt-2">
          Overview
        </div>
        <SidebarContent />
      </div>
    </aside>
  );
};

export default SidebarDesktop;

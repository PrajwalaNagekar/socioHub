import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Command } from "lucide-react";
import SidebarContent from "./SidebarContent";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SidebarMobile = ({ open, onOpenChange }: Props) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-[85vw] max-w-[320px] p-0 bg-background/95 backdrop-blur-2xl border-r shadow-[20px_0_40px_rgba(0,0,0,0.08)] rounded-r-[2.5rem]">
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <div className="h-28 px-8 flex items-center gap-4 font-bold border-b/5 text-2xl tracking-tight z-10 pt-4">
          <div className="flex bg-gradient-to-br from-primary to-primary/80 items-center justify-center p-3 rounded-2xl shadow-lg shadow-primary/30 text-primary-foreground">
            <Command className="w-6 h-6" />
          </div>
          <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            SocioHub
          </span>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar h-[calc(100vh-7rem)] z-10">
          <div className="text-[11px] font-bold text-muted-foreground/60 uppercase tracking-[0.2em] mb-4 px-4 mt-2">
            Overview
          </div>
          <SidebarContent />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SidebarMobile;

import { Sheet, SheetContent } from "@/components/ui/sheet";
import SidebarContent from "./SidebarContent";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SidebarMobile = ({ open, onOpenChange }: Props) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-64 p-0">
        <div className="h-14 px-4 flex items-center font-semibold border-b">
          Admin Panel
        </div>

        <div className="p-4">
          <SidebarContent />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SidebarMobile;

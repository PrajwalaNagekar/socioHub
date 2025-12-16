import SidebarContent from "./SidebarContent";

const SidebarDesktop = () => {
  return (
    <aside className="hidden lg:flex w-64 flex-col border-r bg-background">
      <div className="h-14 px-4 flex items-center font-semibold border-b">
        Admin Panel
      </div>

      <div className="p-4 flex-1">
        <SidebarContent />
      </div>
    </aside>
  );
};

export default SidebarDesktop;

import { NavLink } from "react-router-dom";
import { Home, Search, Compass, MessageCircle, Bell } from "lucide-react";

const SidebarContent = () => {
  const navLinks = [
    { name: "Home", path: "/user/home", icon: <Home className="w-5 h-5" /> },
    { name: "Search", path: "/user/search", icon: <Search className="w-5 h-5" /> },
    { name: "Explore", path: "/user/explore", icon: <Compass className="w-5 h-5" /> },
    { name: "Messages", path: "/user/messages", icon: <MessageCircle className="w-5 h-5" /> },
    { name: "Notifications", path: "/user/notifications", icon: <Bell className="w-5 h-5" /> },
  ];

  return (
    <nav className="flex flex-col gap-3 mt-2">
      {navLinks.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          className={({ isActive }) =>
            `flex items-center gap-4 px-5 py-3.5 rounded-2xl transition-all duration-300 font-medium group ${isActive
              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-[1.02] translate-x-1"
              : "text-muted-foreground hover:bg-muted/80 hover:text-foreground hover:scale-[1.02] hover:translate-x-1"
            }`
          }
        >
          <div className="transition-transform duration-300 group-hover:scale-110">
            {link.icon}
          </div>
          <span className="text-base tracking-wide">{link.name}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default SidebarContent;

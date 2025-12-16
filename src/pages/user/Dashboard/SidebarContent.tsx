import { NavLink } from "react-router-dom";

const SidebarContent = () => {
  return (
    <nav className="flex flex-col gap-2">


      <NavLink to="/user/home" className="px-4 py-2 rounded hover:bg-muted">
        Home
      </NavLink>

      <NavLink to="/user/home" className="px-4 py-2 rounded hover:bg-muted">
        Search
      </NavLink>

      <NavLink to="/user/explore" className="px-4 py-2 rounded hover:bg-muted">
        Explore
      </NavLink>
      <NavLink to="/user/home" className="px-4 py-2 rounded hover:bg-muted">
        Reels
      </NavLink>
      <NavLink to="/user/home" className="px-4 py-2 rounded hover:bg-muted">
        Messages
      </NavLink>
      <NavLink to="/user/home" className="px-4 py-2 rounded hover:bg-muted">
        Notifications
      </NavLink>
      <NavLink to="/user/home" className="px-4 py-2 rounded hover:bg-muted">
        Create
      </NavLink>
      <NavLink to="/user/home" className="px-4 py-2 rounded hover:bg-muted">
        Dashboard
      </NavLink>
      <NavLink to="/user/home" className="px-4 py-2 rounded hover:bg-muted">
        Profile
      </NavLink>
      <NavLink to="/user/home" className="px-4 py-2 rounded hover:bg-muted">
        More
      </NavLink>
    </nav>
  );
};

export default SidebarContent;

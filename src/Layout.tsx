import { NavLink } from "react-router-dom";
import paths from "./path";

interface Props {
  children: React.ReactNode;
}

function SideNavigation() {
  return (
    <div className="side-container">
      <ul>
        {Object.entries(paths).map(([key, value]) => (
          <NavLink
            key={key}
            to={value.path}
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "400",
                opacity: isActive ? "1" : "0.7",
              };
            }}
          >
            {value.label}
          </NavLink>
        ))}
      </ul>
    </div>
  );
}

function Layout({ children }: Props) {
  return (
    <>
      <SideNavigation />
      <div className="three-wrapper">{children}</div>
    </>
  );
}

export default Layout;

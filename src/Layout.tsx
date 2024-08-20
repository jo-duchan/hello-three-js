import { Link } from "react-router-dom";
import paths from "./path";

interface Props {
  children: React.ReactNode;
}

function SideNavigation() {
  return (
    <div className="side-container">
      <ul>
        {Object.entries(paths).map(([key, value]) => (
          <Link key={key} to={value.path}>
            {value.label}
          </Link>
        ))}
      </ul>
    </div>
  );
}

function Layout({ children }: Props) {
  return (
    <>
      <SideNavigation />
      {children}
    </>
  );
}

export default Layout;

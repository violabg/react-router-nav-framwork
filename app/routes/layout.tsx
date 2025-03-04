import { Outlet } from "react-router";
import Breadcrumbs from "~/components/Breadcrumbs";

export const handle = {
  breadcrumb: "Home",
};

const Layout = () => {
  return (
    <div className="p-4">
      {/* <nav>
        <span>navbar: </span>
        <Link to="/">Home</Link> | <Link to="page1">page 1</Link>
      </nav> */}
      <hr />
      <header>
        <Breadcrumbs />
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;

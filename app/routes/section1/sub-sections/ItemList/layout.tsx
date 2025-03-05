import { Outlet } from "react-router";

export const handle = {
  breadcrumb: "sub section 1",
  path: "/section1/sub-section1",
};

export default function SectionOutlet() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

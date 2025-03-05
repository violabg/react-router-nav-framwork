import { Outlet } from "react-router";

export const handle = {
  breadcrumb: "section 1",
};

export default function SectionOutlet() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

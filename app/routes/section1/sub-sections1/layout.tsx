import { Outlet } from "react-router";

export const handle = {
  breadcrumb: "sub section 1",
};

export default function SectionOutlet() {
  return (
    <>
      <Outlet />
    </>
  );
}

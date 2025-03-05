import { Outlet } from "react-router";

export const handle = {
  breadcrumb: "Item details",
};

export default function SectionOutlet() {
  return (
    <>
      <Outlet />
    </>
  );
}

import { Outlet } from "react-router";
import type { Item } from "~/routes/types";
import type { Route } from "./+types";

export const handle = {
  breadcrumb: "sub section 1",
};

export async function clientLoader() {
  const result = new Promise<Item[]>((resolve) => {
    const items: Item[] = [
      {
        label: "Item 1",
        id: "1",
      },
      {
        label: "Item 2",
        id: "2",
      },
      {
        label: "Item 3",
        id: "3",
      },
    ];
    setTimeout(() => {
      resolve(items);
    }, 2000);
  });
  return { items: result };
}

export default function SectionOutlet({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <Outlet />
    </>
  );
}

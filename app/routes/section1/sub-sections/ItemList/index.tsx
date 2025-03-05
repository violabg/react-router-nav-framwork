import { Suspense } from "react";
import { Await, Link } from "react-router";
import type { Item } from "~/routes/types";
import type { Route } from "./+types";

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

export default function ItemList({ loaderData }: Route.ComponentProps) {
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl">sub section 1 list</h1>
      <Suspense fallback={<div>loading items</div>}>
        <Await resolve={loaderData?.items}>
          {(value) => (
            <ul>
              {value.map((item: any) => {
                return (
                  <li key={item.id}>
                    <Link to={`item/${item.id}`}>{item.label}</Link>
                  </li>
                );
              })}
            </ul>
          )}
        </Await>
      </Suspense>
    </div>
  );
}

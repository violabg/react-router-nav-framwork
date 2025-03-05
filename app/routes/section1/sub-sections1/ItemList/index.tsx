import { Suspense } from "react";
import { Await, Link } from "react-router";
import type { Route } from "./+types";

export default function ItemList({ matches }: Route.ComponentProps) {
  const loaderData = matches[3];
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl">sub section 1 list</h1>
      <Suspense fallback={<div>loading items</div>}>
        <Await resolve={loaderData?.data.items}>
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

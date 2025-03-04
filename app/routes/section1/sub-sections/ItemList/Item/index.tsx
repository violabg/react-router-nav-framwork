import { Suspense } from "react";
import { Await, Link, useLoaderData } from "react-router";
import type { Route } from "../+types";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const result = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        label: `Item ${params.id}`,
        id: params.id,
      });
    }, 2000);
  });
  return { item: result };
}

export const handle = {
  breadcrumb: "Item details",
};

export default function Item() {
  const loaderData = useLoaderData();
  return (
    <div className="p-4 text-center">
      <Suspense fallback={<div>loading item</div>}>
        <Await resolve={loaderData.item}>
          {(value) => (
            <>
              <h1 className="text-2xl">{value.label}</h1>
              <Link to="/">go home</Link>
            </>
          )}
        </Await>
      </Suspense>
    </div>
  );
}

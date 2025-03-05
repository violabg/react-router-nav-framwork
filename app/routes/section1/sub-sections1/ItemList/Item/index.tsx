import { Suspense } from "react";
import { Await, Link } from "react-router";
import type { Item } from "~/routes/types";
import type { Route } from "./+types";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const result = new Promise<Item>((resolve) => {
    const item: Item = {
      label: `Item ${params.id}`,
      id: params.id,
    };
    setTimeout(() => {
      resolve(item);
    }, 2000);
  });
  return { item: result };
}

export default function Item({ loaderData }: Route.ComponentProps) {
  return (
    <div className="p-4 text-center">
      <Suspense fallback={<div>loading item</div>}>
        <Await resolve={loaderData?.item}>
          {(value) => (
            <>
              <h1 className="text-2xl">{value.label}</h1>
              <div className="mt-4">
                <Link to="/section1/sub-section1">Back to list</Link>
              </div>
              <div className="mt-2">
                <Link to="/">Go home</Link>
              </div>
            </>
          )}
        </Await>
      </Suspense>
    </div>
  );
}

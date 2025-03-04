import { Suspense } from "react";
import { Await, Link, useLoaderData } from "react-router";

export async function clientLoader() {
  const result = new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          label: "Item 1",
          id: 1,
        },
        {
          label: "Item 2",
          id: 2,
        },
        {
          label: "Item 3",
          id: 3,
        },
      ]);
    }, 2000);
  });
  return { items: result };
}

export const handle = {
  breadcrumb: "sub section 1",
};

export default function ItemList() {
  const loaderData = useLoaderData();
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl">sub section 1 list</h1>
      <Suspense fallback={<div>loading items</div>}>
        <Await resolve={loaderData.items}>
          {(value) => (
            <ul>
              {value.map((item: any) => {
                return (
                  <li key={item.id}>
                    <Link to={`/section1/sub-section1/item/${item.id}`}>
                      {item.label}
                    </Link>
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

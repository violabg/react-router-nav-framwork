import { Link } from "react-router";
import type { Route } from "./+types/home";

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl">Hello</h1>
      <div className="flex justify-center gap-4 p-4 align-center">
        <div className="flex justify-center bg-slate-300 p-4 align-center">
          <Link to="/section1">section 1</Link>
        </div>
        <div className="flex justify-center bg-slate-300 p-4 align-center">
          <Link to="/section2">section 2</Link>
        </div>
      </div>
    </div>
  );
}

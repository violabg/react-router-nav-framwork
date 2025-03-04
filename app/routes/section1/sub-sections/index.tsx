import { Link } from "react-router";

export const handle = {
  breadcrumb: "section 1",
};

export default function Section1() {
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl">section 1</h1>
      <div className="flex justify-center gap-4 p-4 align-center">
        <div className="flex justify-center bg-slate-300 p-4 align-center">
          <Link to="sub-section1">sub section 1</Link>
        </div>
        <div className="flex justify-center bg-slate-300 p-4 align-center">
          <Link to="sub-section2">sub section 2</Link>
        </div>
      </div>
    </div>
  );
}

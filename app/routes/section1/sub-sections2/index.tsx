import { Link } from "react-router";

export const handle = {
  breadcrumb: "sub section 2",
};

export default function SubSection2() {
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl">sub section 2</h1>
      <Link to="/">go home</Link>
    </div>
  );
}

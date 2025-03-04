import { Link } from 'react-router';

export const handle = {
  breadcrumb: 'Section 2',
};

export default function Section2() {
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl">section 2</h1>
      <Link to="/">go home</Link>
    </div>
  );
}

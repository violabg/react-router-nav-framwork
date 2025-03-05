import { Link, useLocation, useMatches } from "react-router";

const Breadcrumbs = () => {
  const matches = useMatches();
  const location = useLocation();
  console.log("matches :>> ", matches);
  // Extract current search params (query strings) and state
  const searchParams =
    location.search === ""
      ? location.state?.searchParams
        ? `?${location.state?.searchParams}`
        : ""
      : location.search;
  const currentState = location.state;

  const filtered = matches.filter(
    (match: any) => match.handle && match.handle.breadcrumb
  );
  const breadcrumbs = filtered.map((match: any, index) => {
    const isTheIndexBeforeLast = index > 1 && index === filtered.length - 2;
    const breadcrumb =
      typeof match.handle.breadcrumb === "function"
        ? match.handle.breadcrumb(match.params)
        : match.handle.breadcrumb;

    return {
      breadcrumb,
      href: `${match.pathname}${isTheIndexBeforeLast ? searchParams : ""}`, // Append search params to the URL
      // state: currentState // Keep the state during navigation
    };
  });

  return (
    <div>
      <span className="font-bold">Breadcrumbs: </span>
      {breadcrumbs.map(({ breadcrumb, href }, index) =>
        index < breadcrumbs.length - 1 ? (
          <span key={index} className="text-blue-500 hover:text-blue-700">
            <Link to={href}>{breadcrumb}</Link>
            <span key={index} className="px-1 text-gray-500">
              /
            </span>
          </span>
        ) : (
          <span key={index} className="text-gray-500">
            {breadcrumb}
          </span>
        )
      )}
    </div>
  );
};

export default Breadcrumbs;

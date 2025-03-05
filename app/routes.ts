import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    route("/", "routes/home.tsx"),
    route("section1", "routes/nested-layout/index.tsx", [
      index("routes/section1/sub-sections/index.tsx"),
      layout("routes/section1/layout.tsx", [
        // Fix: Nest item/:id directly under sub-section1 with ItemList layout
        layout("routes/section1/sub-sections/ItemList/layout.tsx", [
          route(
            "sub-section1",
            "routes/section1/sub-sections/ItemList/index.tsx"
          ),
          route(
            "sub-section1/item/:id",
            "routes/section1/sub-sections/ItemList/Item/index.tsx"
          ),
        ]),
        route("sub-section2", "routes/section1/sub-sections2/index.tsx"),
      ]),
    ]),
    route("section2", "routes/section2/index.tsx"),
  ]),
] satisfies RouteConfig;

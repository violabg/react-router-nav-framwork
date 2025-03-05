import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    route("/", "routes/home.tsx"),
    route("section1", "routes/section1/layout.tsx", [
      index("routes/section1/sub-sections1/index.tsx"),
      route("sub-section1", "routes/section1/sub-sections1/layout.tsx", [
        index("routes/section1/sub-sections1/ItemList/index.tsx"),
        layout("routes/section1/sub-sections1/ItemList/layout.tsx", [
          route(
            "item/:id",
            "routes/section1/sub-sections1/ItemList/Item/index.tsx"
          ),
        ]),
      ]),
      route("sub-section2", "routes/section1/sub-sections2/index.tsx"),
    ]),
    route("section2", "routes/section2/index.tsx"),
  ]),
] satisfies RouteConfig;

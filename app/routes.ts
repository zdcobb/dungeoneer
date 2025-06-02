import { type RouteConfig, index, route } from "@react-router/dev/routes";

/*
- Unauthed routes
    - welcome
    - login
    - register
- Authed routes
    - home
    - maps
    - addmap
    - viewer
    - profile
*/

export default [
    // unauthed
    index("welcome/welcome.tsx"),
    route("/login", "user/login.tsx"),
    route("/logout", "user/logout.ts"),
    route("/register", "user/register.tsx"),
    // TODO - implement other routes,
    // // authed
    // layout("layouts/dashboard.tsx", [
    //   route("/home", "routes/home.tsx"),
    //   route("/maps", "routes/maps.tsx"),
    //   route("/profile", "routes/profile.tsx"),
    //   route("/viewer", "routes/viewer.tsx"),
    // ]),
] satisfies RouteConfig;

import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { WhatWeDo } from "./pages/WhatWeDo";
import { Programs } from "./pages/Programs";
import { Contact } from "./pages/Contact";
import { Team } from "./pages/Team";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "what-we-do", Component: WhatWeDo },
      { path: "programs", Component: Programs },
      { path: "contact", Component: Contact },
      { path: "team", Component: Team },
    ],
  },
]);

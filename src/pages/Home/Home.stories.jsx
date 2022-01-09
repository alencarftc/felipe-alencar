import React from "react";

import { BASE_UI_TITLE } from "@constants/storybook";
import Home from "./Home";

export default {
  title: `${BASE_UI_TITLE}/Pages/Home`,
  component: Home,
};

export const Landing = () => <Home />;

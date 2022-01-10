import React from "react";

import { BASE_UI_TITLE } from "@constants/storybook";
import About from "./About";

export default {
  title: `${BASE_UI_TITLE}/Pages/About`,
  component: About,
};

export const Landing = () => <About />;

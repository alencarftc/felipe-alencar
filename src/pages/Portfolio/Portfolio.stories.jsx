import React from "react";

import { BASE_UI_TITLE } from "@constants/storybook";
import Portfolio from "./Portfolio";

export default {
  title: `${BASE_UI_TITLE}/Pages/Portfolio`,
  component: Portfolio,
};

export const Landing = () => <Portfolio />;

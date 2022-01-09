import React from "react";

import { BASE_UI_TITLE } from "@constants/storybook";
import Header from "./Header";

export default {
  title: `${BASE_UI_TITLE}/Layouts/Header`,
  component: Header,
};

export const Landing = () => <Header />;

import React from "react";

import { BASE_UI_TITLE } from "@constants/storybook";
import Contact from "./Contact";

export default {
  title: `${BASE_UI_TITLE}/Pages/Contact`,
  component: Contact,
};

export const Landing = () => <Contact />;

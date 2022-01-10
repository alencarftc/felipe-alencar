/* eslint-disable no-var */
import React from "react";

import { BASE_UI_TITLE } from "@constants/storybook";
import Logo from "./Logo";

export default {
  title: `${BASE_UI_TITLE}/Components/Logo`,
  component: Logo,
};

export const Default = () => <Logo />;

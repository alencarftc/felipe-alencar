/* eslint-disable no-var */
import React from "react";

import { BASE_UI_TITLE } from "@constants/storybook";
import Button from "./Button";

export default {
  title: `${BASE_UI_TITLE}/Components/Button`,
  component: Button,
};

export const Default = () => <Button />;

import React from "react";
import { storiesOf } from "@storybook/react";

import HelloWorld from "./";

const stories = storiesOf("HelloWorld", module);

stories.add("Default", () => {
  const story = <HelloWorld />;
  return story;
});

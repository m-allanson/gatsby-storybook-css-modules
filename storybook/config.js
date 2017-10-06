/**
 * Config file for storybook
 */

import { addDecorator, configure } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { setOptions } from "@storybook/addon-options";
import React from "react";

// Include any global CSS (standard CSS, not CSS Modules)
import "../src/layouts/index.css";

setOptions({
  name: "Example",
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: false,
  showSearchBox: false,
  downPanelInRight: false
});

const req = require.context("../src/components", true, /stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Wrap all stories in decorator
addDecorator(story => (
  <MemoryRouter>
      {story()}
  </MemoryRouter>
));

configure(loadStories, module);

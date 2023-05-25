import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/theme/theme";
import React from "react";
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider {...{ theme }}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
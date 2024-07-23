import type { StorybookConfig } from "@storybook/nextjs";

import path from "path";

const config: StorybookConfig = {
  stories: ["../test/**/*.stories.mdx", "../test/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  staticDirs: ['../public'],
  framework: {
    name: "@storybook/nextjs",
    options: {
      nextConfigPath: path.resolve(__dirname, '../next.config.cjs'),
    }
  }
};
export default config;

import { ThemeProvider } from "@emotion/react";
import { defaultTheme } from "../src/styles/themes";
import {breakpoints, GlobalStyles} from "../src/styles/GlobalStyles";
import { Preview } from "@storybook/react";
import React from "react";

const customViewports = Object.fromEntries(
    Object.entries(breakpoints).map(([key, val], idx) => {
        return [
            key,
            {
                name: key,
                styles: {
                    width: `${val}px`,
                    height: `${(idx + 5) * 10}vh`,
                },
            },
        ];
    })
);

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        viewport: { viewports: customViewports },
    },
    decorators: [
        (Story) => (
            <ThemeProvider theme={defaultTheme}>
                <GlobalStyles />
                <Story />
            </ThemeProvider>
        ),
    ],
};

export default preview;

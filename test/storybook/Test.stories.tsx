import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Text } from "../../src/component/base/Text"

export default {
  component: Text,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta<typeof Text>

export const Default: StoryObj<typeof Text> = {
  args: {
    children: (
      <>
        <span>Test</span> story
      </>
    ),
    color: "black",
    accent: "green",
    alignment: "center",
    size: "md",
  },
}

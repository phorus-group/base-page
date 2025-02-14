"use client"

import DefaultHeadTags from "./DefaultHeadTags"

const NAME = "Naviro"
const DESCRIPTION = "Naviro"
const URL = "https://app.naviro.io"

const Head = () => (
  <head>
    <DefaultHeadTags name={NAME} description={DESCRIPTION} url={URL} />
    <title>
      {NAME} - {DESCRIPTION}
    </title>
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width,
              shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
    />
  </head>
)

export default Head

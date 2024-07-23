"use client"

import { ReactNode } from "react"
import Head from "../component/layout/Head"
import RootProviders from "../component/layout/RootProviders"
import { defaultTheme } from "../styles/themes"

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <Head />
    <body>
      <RootProviders theme={defaultTheme}>{children}</RootProviders>
    </body>
  </html>
)

export default RootLayout

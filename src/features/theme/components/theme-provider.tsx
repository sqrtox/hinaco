"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
} from "@mui/material/styles";
import type { PropsWithChildren, ReactNode } from "react";

export default function ThemeProvider({
  children,
}: PropsWithChildren): ReactNode {
  const theme = extendTheme();

  return (
    <AppRouterCacheProvider>
      <CssVarsProvider defaultMode="system" theme={theme}>
        <CssBaseline />
        {children}
      </CssVarsProvider>
    </AppRouterCacheProvider>
  );
}

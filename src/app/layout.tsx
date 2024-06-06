import ThemeProvider from "@/features/theme/components/theme-provider";
import type { PropsWithChildren, ReactNode } from "react";

export default function Layout({ children }: PropsWithChildren): ReactNode {
  return (
    <html lang="ja">
      <head>
        {process.env.NODE_ENV === "development" && (
          <script src="http://localhost:8097" />
        )}
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

import type {Metadata} from "next";
import {Geist} from "next/font/google";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v15-appRouter";
import { AppProvider } from "../providers/AppProvider";
import {Box} from "@mui/system";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Michaela.L",
  description: "Michaela.L website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <body className={`${geistSans.variable}`}>
          <AppProvider>
            <Box component={"main"}>{children}</Box>
           
          </AppProvider>
        </body>
      </AppRouterCacheProvider>
    </html>
  );
}

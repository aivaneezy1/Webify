import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavbarComponent from "./(Components)/Navbar/Navbar";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { ThemeProvider } from "./Providers/theme-provider";
import { ConvexClientProvider } from "./Providers/convex-client-provider";
import { ClerkLoading, ClerkLoaded } from "@clerk/nextjs";
import { ReduxProvider } from "./redux/redux-provider";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html
      lang="en"
      suppressHydrationWarning>
      <body

      >

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <ConvexClientProvider>
            <ReduxProvider>
              <NavbarComponent />
              {children}
            </ReduxProvider>
          </ConvexClientProvider>
        </ThemeProvider>

      </body>
    </html>

  );
}

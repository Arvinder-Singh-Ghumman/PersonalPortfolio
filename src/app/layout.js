import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "../components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arvinder Singh | Portfolio",
  description: "Personal website of Arvinder Singh Ghumman  ",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
  rel="icon"
  href="/profile.png"
  type="png"
/>
      <body className={inter.className}>
      <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}

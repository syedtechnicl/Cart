import { Inter } from "next/font/google";
import { Providers } from "./Providers";
import Navbar from "./Components/Nav";
import ReduxProvider from "./ReduxTk/provider";
// import Navbar from "@/Components/Nav";
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Providers>
            <Navbar />
            {children}
          </Providers>
        </ReduxProvider>
      </body>
    </html>
  );
}

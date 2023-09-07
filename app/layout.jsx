import Header from "./components/header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Schedule App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-center m-10  ">
          <h1 className="font-extrabold text-3xl">JADWAL IBADAH</h1>
        </div>

        <div className="max-w-4xl mx-auto px-5">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}

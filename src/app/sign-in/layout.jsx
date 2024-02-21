import { Inter } from "next/font/google";
import "../globals.css";
import Card from "../components/Card";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ember | Sign In",
  description: "Generated by create next app",
  icons: {
    icon:['/logo.svg']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="signin__container">
          {children}
          <Card />
        </div>
      </body>
    </html>
  );
}
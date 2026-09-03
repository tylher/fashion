import Nav from "@/components/Nav";
import { Bricolage_Grotesque, Fraunces, Inter } from "next/font/google";
import Footer from "../components/Footer";
import "./globals.css";

// 1. Load the fonts with next/font
const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display", // matches the CSS variable used in @theme
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body", // maps to Inter
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-voice", // maps to Fraunces italic
});

export const metadata = {
  title: "A sample fashion website",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`
        ${bricolageGrotesque.variable}
        ${inter.variable}
        ${fraunces.variable}
        h-full antialiased
      `}
      // Since --font-ui also needs to be Inter, we point it to the same variable
      style={{ "--font-ui": "var(--font-body)" }}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

// app/layout.js
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Poppins, Playfair_Display } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Shree Visaalakshi Lace | Lace Manufactur in Surat",
  description:
    "Shree Visaalakshi Lace is a premium lace manufacturer in Surat offering high-quality lace designs for garments and fashion industries.",
  keywords: [
    "Shree Visaalakshi Lace",
    "lace manufacturer Surat",
    "lace suppliers India",
    "lace company Gujarat",
    "Number one lace manufacturer in India",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Shree Visaalakshi Lace",
              url: "https://www.lacemanufactures.in",
              logo: "https://www.lacemanufactures.in/images/logo.png",
            }),
          }}
        />
      </head>

      <body className={poppins.className}>
        <Navbar />

        {/* Page Content */}
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import "./globals.css";
<<<<<<< HEAD
<<<<<<< HEAD


export const metadata: Metadata = {
  title: "StockUp",
  description: "Generated by create next app",
=======
=======
>>>>>>> 133fd70 (fixed unused varaibles)
import Link from "next/link";


export const metadata: Metadata = {
  title: "Stockup",
  description: "Your stock trading app",
<<<<<<< HEAD
>>>>>>> 0ee5324 (update some pages)
=======
>>>>>>> 133fd70 (fixed unused varaibles)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"font-sans antialiased"}
      >
        {children}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 133fd70 (fixed unused varaibles)
        <footer className="bg-[#949494] py-4">
          <ul className="flex justify-center flex-col md:flex-row gap-3 md:gap-5 text-center">
            <li className="text-sm">
              <Link className="hover:underline" href="/">
                Privacy Policy
              </Link>
            </li>
            <li className="text-sm">
              <Link className="hover:underline" href="/">
                Terms of Service
              </Link>
            </li>
            <li className="text-sm">
              <Link className="hover:underline" href="/">
                Help
              </Link>
            </li>
          </ul>
        </footer>
<<<<<<< HEAD
>>>>>>> 0ee5324 (update some pages)
=======
>>>>>>> 133fd70 (fixed unused varaibles)
      </body>
    </html>
  );
}

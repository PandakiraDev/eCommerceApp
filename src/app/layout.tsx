import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/molecules/Navbar";
import { ActiveLink } from "@/components/atoms/ActiveLink";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Products",
};

export default function RootLayout({
  children,
} // modal,
: {
  children: React.ReactNode;
  // modal: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <Navbar />
        <section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
          {children}
        </section>
        <footer>
          <p className="text-center text-sm text-gray-500">
            By: Konrad Raszuk Ⓒ2023
          </p>
          <div className="flex justify-center">
            <p className="mx-3">
              <ActiveLink
                href={"/polityka-prywatnosci"}
                exact={true}
                className={"text-gray-700 hover:text-gray-900 hover:font-bold"}
                activeClassName={"underline"}
              >
                Polityka prywatności
              </ActiveLink>
            </p>
            <p className="mx-3">
              <ActiveLink
                href={"/regulamin"}
                exact={true}
                className={"text-gray-700 hover:text-gray-900 hover:font-bold"}
                activeClassName={"underline"}
              >
                Regulamin
              </ActiveLink>
            </p>
          </div>
        </footer>
        {/* {modal} */}
      </body>
    </html>
  );
}

import React, { ReactNode } from "react";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex">{children}</main>
      <Footer />
    </div>
  );
}

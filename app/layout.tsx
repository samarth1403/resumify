import Footer from "@/components/LayoutComponents/Footer";
import Header from "@/components/LayoutComponents/Header";
import "@/styles/global.css";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Resumify",
  description: "Create Your Resume With Our Resume Builder",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Header />
          <Toaster />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;

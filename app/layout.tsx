import { Header } from "@/components";
import "@/styles/global.css";
import { ReactNode } from "react";

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
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;

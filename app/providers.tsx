"use client";

import { GlobalProvider } from "@/context/GlobalProvider";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return <GlobalProvider>{children}</GlobalProvider>;
}

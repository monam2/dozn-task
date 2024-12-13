import { ReactNode } from "react";
import { BrowserRouter } from "react-router";

export default function RouteProivder({ children }: { children: ReactNode }) {
  return <BrowserRouter>{children}</BrowserRouter>;
}

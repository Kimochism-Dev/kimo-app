type ISandboxLayout = {
  children: React.ReactNode;
};

import { NavBar } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kimochism | Sandbox",
  description: "Sandbox",
};

const SandboxLayout = ({ children }: ISandboxLayout) => {
  return (
    <div>
      <NavBar/>
      {children}
    </div>
  );
};

export default SandboxLayout;

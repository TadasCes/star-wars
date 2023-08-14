import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";
import { Header } from "./Header";

export const Nav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  return (
    <>
      <Header
        open={sidebarOpen}
        onMenuButtonClick={() => setSidebarOpen((prev) => !prev)}
      />
      <Sidebar open={sidebarOpen} />
    </>
  );
};

import React, { useEffect, useState } from "react";
import { NavControl } from "./NavControl";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";

export const Nav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  return (
    <div className="">
      <div className="fixed top-12 right-12">
        <NavControl
          open={sidebarOpen}
          setOpen={setSidebarOpen}
          onMenuButtonClick={() => setSidebarOpen((prev) => !prev)}
        />
      </div>
      <Sidebar open={sidebarOpen} />
    </div>
  );
};

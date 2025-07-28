import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import CharacterSidebar from "@/components/common/character-sidebar/character-sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <SidebarProvider>
      <CharacterSidebar />
      <main>
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default Layout;

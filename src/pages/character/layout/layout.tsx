import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import CharacterSidebar from "@/components/character/character-sidebar/character-sidebar";
import { Outlet } from "react-router-dom";
import { JsonLoader } from "@/components/common/json-loader";
import { useStore } from "@/hooks/use-store";
import { ModeToggle } from "@/components/mode-toggle";

const Layout = () => {
  const data = useStore((state) => state.data);
  const characterName = data?.character?.name || "Adventurer";

  // Loads JSON from public/assets/data.json for use during dev, set to false to turn off
  const showJsonLoader = false;

  return (
    <>
      <div className="absolute top-4 right-4 z-30">
        <ModeToggle />
      </div>
      {showJsonLoader && <JsonLoader />}
      <SidebarProvider>
        <CharacterSidebar characterName={characterName} />
        <main className="flex flex-col h-screen flex-1 w-full">
          <SidebarTrigger />
          <div className="flex-1 w-full flex flex-col">
            <Outlet />
          </div>
        </main>
      </SidebarProvider>
    </>
  );
};

export default Layout;

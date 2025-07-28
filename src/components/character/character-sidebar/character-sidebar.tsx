import { Wand, ChartNoAxesGantt, Swords, Backpack, Scroll } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import CharacterMenuItem from "./character-menu-item";

export type CharacterSidebarProps = {
  characterName?: string;
};

const items = [
  {
    title: "Overview",
    url: "#",
    icon: ChartNoAxesGantt,
  },
  {
    title: "Actions",
    url: "/actions",
    icon: Swords,
  },
  {
    title: "Spells & Abilities",
    url: "/spells",
    icon: Wand,
  },
  {
    title: "Inventory",
    url: "/inventory",
    icon: Backpack,
  },
  {
    title: "Details",
    url: "/lore",
    icon: Scroll,
  },
];

const CharacterSidebar = ({ characterName }: CharacterSidebarProps) => {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{characterName}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <CharacterMenuItem
                  key={item.title}
                  title={item.title}
                  url={item.url}
                  icon={item.icon}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default CharacterSidebar;

import { SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";

export type CharacterMenuItemProps = {
  title: string;
  url: string;
  icon: React.ElementType;
};

const CharacterMenuItem = ({ title, url, icon: Icon }: CharacterMenuItemProps) => {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <a href={url}>
          <Icon />
          <span>{title}</span>
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

export default CharacterMenuItem;
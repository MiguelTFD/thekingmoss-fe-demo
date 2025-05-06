import {useNavigate} from "react-router-dom";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavProjects({
                                projects,
                                groupName
                            }: {
    projects: {
        title: string
        name: string
        url: string
        icon: any
    }[],
    groupName: string
}) {
    const navigate = useNavigate();

    const handleClick = (url: string) => {
        navigate(url);
    };

    return (
        <SidebarGroup>
            <SidebarGroupLabel>
                {groupName}
            </SidebarGroupLabel>
            <SidebarMenu>
                {projects.map((item) => (
                    <SidebarMenuItem
                        key={item.title}
                    >
                        <SidebarMenuButton
                            onClick={() => handleClick(item.url)}
                            tooltip={item.title}
                        >
                            {item.icon && <item.icon/>}
                            <span>{item.title}</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}


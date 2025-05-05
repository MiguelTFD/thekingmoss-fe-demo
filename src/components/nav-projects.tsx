import {
  Folder,
  Forward,
  MoreHorizontal,
  Trash2,
  type LucideIcon,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

export function NavProjects({
  projects,
}: {
  projects: {
    title: string
    name: string
    url: string
    icon: any
  }[]
}) {
  const { isMobile } = useSidebar()
  
  const handleClick= ()=>{
    alert("hello friend")
  }

  return (
    <SidebarGroup>
      <SidebarGroupLabel>
        Acciones
      </SidebarGroupLabel>
      <SidebarMenu>
        {projects.map((item) => (
          <SidebarMenuItem 
            key={item.title}
          >
            <SidebarMenuButton 
              onClick={handleClick} 
              tooltip={item.title}
            >
              {item.icon && <item.icon />}
              <span>{item.title}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}

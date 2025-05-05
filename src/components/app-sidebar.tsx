import * as React from "react"
import {
  BookOpen,
  Bot,
  House,
  SquareLibrary,
  ShoppingBasket,
  Leaf,
  UsersRound,
  Package2,
  Settings2,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "MiguelTFD",
    email: "migueltfd@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "The King Moss",
      logo: Leaf,
      plan: "Administrador",
    },
  ],
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: House,
      isActive: true,
    },
  ],
  projects: [
    {
      title: "Productos",
      url: "#",
      icon: ShoppingBasket,
    },
    {
      title: "Categorias",
      url: "#",
      icon: SquareLibrary,
    },
    {
      title: "Pedidos",
      url: "#",
      icon: Package2,
    },
    {
      title: "Clientes",
      url: "#",
      icon: UsersRound,
    },
  ],
}
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

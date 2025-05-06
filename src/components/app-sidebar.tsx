import * as React from "react"
import {
  House,
  SquareLibrary,
  ShoppingBasket,
  Leaf,
  UsersRound,
  Package2,
} from "lucide-react"

import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import  TeamSwitcher  from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: House,
      isActive: true,
    },
  ],
  projects: [
    {
      title: "Productos",
      url: "/productos",
      icon: ShoppingBasket,
    },
    {
      title: "Categorias",
      url: "/categorias",
      icon: SquareLibrary,
    },
    {
      title: "Pedidos",
      url: "/pedidos",
      icon: Package2,
    },
    {
      title: "Clientes",
      url: "/clientes",
      icon: UsersRound,
    },
  ],
}
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher/>
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.navMain} groupName={"Principal"} />
        <NavProjects projects={data.projects} groupName={"Acciones"} />
      </SidebarContent>
      <SidebarFooter>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

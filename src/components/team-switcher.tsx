import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const TeamSwitcher = () => {

  return (
    <SidebarMenu>
      <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="bg-sidebar-accent flex aspect-square size-8 items-center justify-center rounded-lg">
                    <img
                        src={"https://thekingmoss.com/images/icon/TKMLogo.png"}
                        alt={"lg"}/>
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">The King Moss</span>
                <span className="truncate text-xs">Role</span>
              </div>
            </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

export default TeamSwitcher;
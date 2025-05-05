"use client"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: any
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  const handleClick= ()=>{
    alert("hello friend")
  }
  return (
    <SidebarGroup>
      <SidebarGroupLabel>
        Principal
      </SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
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

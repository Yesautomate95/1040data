"use client";

import * as React from "react";

import { SearchForm } from "@/components/search-form";
import { VersionSwitcher } from "@/components/version-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Financial Documents",

      items: [
        {
          title: "Wages OCR",
          url: "/services/wages-ocr",
        },
        {
          title: "Interest OCR",
          url: "/services/interest-ocr",
        },
        {
          title: "Divident OCR",
          url: "/services/divident-ocr",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }) {
  const pathname = usePathname();

  console.log({ pathname });

  return (
    <Sidebar collapsible="none" variant="floating" {...props}>
      {/* <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
        <SearchForm />
      </SidebarHeader> */}
      <SidebarContent>
        <SidebarGroupLabel>
          <SidebarMenuButton
            isActive={pathname === "/services"}
            className={"text-lg bg-[#83a9c969] font-bold mt-4 uppercase"}
            asChild
          >
            <a href={"/services"}>Forms</a>
          </SidebarMenuButton>
        </SidebarGroupLabel>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel
              className={"bg-[#83a9c969] text-sm mb-2 font-bold"}
            >
              {item.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={pathname === item.url}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

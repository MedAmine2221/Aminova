"use client";
import { Navbar, NavbarContent, NavbarItem, Link, Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownItem } from "@heroui/react";
import Image from "next/image";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineGlobal } from "react-icons/ai";

export default function NavBar() {
  return (
    <Navbar 
      className="px-6" 
      maxWidth="full"
      height="5rem"
    >
      <NavbarContent justify="start" className="flex items-center">
        <Image
          src="/logo.png"
          alt="AM Academy Logo"
          width={500}
          height={80}
          style={{ objectFit: "contain", height: "4rem", width: "auto" }}
          priority
          onClick={() => window.location.href = "/"}
        />
      </NavbarContent>

      <NavbarContent justify="center" className="hidden sm:flex gap-4 items-center">
        <NavbarItem isActive>
          <Link className="text-[#1fa6a6]" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">My Courses</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">Blog / Community</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">Chat</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">Learning Tracker</Link>
        </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <IoIosNotificationsOutline size={25} color="#737373" />
          </NavbarItem>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <AiOutlineGlobal size={25} color="#737373" />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="settings">English</DropdownItem>
              <DropdownItem key="team_settings">French</DropdownItem>
              <DropdownItem key="analytics">Arabic</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
    </Navbar>
  );
}
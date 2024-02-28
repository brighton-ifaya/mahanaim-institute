"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Image from "next/image";

const menuItemsCourses: { title: string; href: string }[] = [
	{
		title: "Departments",
		href: "../courses/departments",
	},
	{
		title: "Courses",
		href: "../courses/courses",
	},
];
const menuItemsAboutUs: { title: string; href: string }[] = [
	{
		title: "Chairman's Message",
		href: "../about/chairman-message",
	},
	{
		title: "Chancellor's Message",
		href: "../about/chancellor-message",
	},
	{
		title: "mission",
		href: "../about/mission",
	},
];

const menuItemsQuickLinks: { title: string; href: string }[] = [
	{
		title: "Student Portal",
		href: "#",
	},
	{
		title: "Staff Portal",
		href: "#",
	},
	{
		title: "Admission Guidelines",
		href: "#",
	},
];

export function NavigationMenuDemo() {
	return (
		<NavigationMenu className="flex flex-col max-w-none pb-5">
			<Image
				className="my-5"
				src="/mclogo.png"
				alt="logo"
				width={230}
				height={230}
			/>
			<NavigationMenuList className="space-x-10">
				<NavigationMenuItem>
					<Link href="/" legacyBehavior passHref>
						<NavigationMenuLink
							className={`${navigationMenuTriggerStyle()} text-baselg font-bold`}
						>
							Home
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				{/* Testing this only */}
				<NavigationMenuItem>
					<NavigationMenuTrigger>About Us</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className=" grid w-[200px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[500px] ">
							{menuItemsAboutUs.map((component) => (
								<ListItem
									key={component.title}
									title={component.title}
									href={component.href}
								></ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				{/* testing above only */}
				<NavigationMenuItem>
					<NavigationMenuTrigger className="text-baselg font-bold">
						Courses
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[500px] ">
							{menuItemsCourses.map((component) => (
								<ListItem
									key={component.title}
									title={component.title}
									href={component.href}
								></ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/" legacyBehavior passHref>
						<NavigationMenuLink
							className={`${navigationMenuTriggerStyle()} text-baselg font-bold`}
						>
							News
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger className="text-baselg font-bold">
						Quick Links
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
							{menuItemsQuickLinks.map((component) => (
								<ListItem
									key={component.title}
									title={component.title}
									href={component.href}
								></ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/" legacyBehavior passHref>
						<NavigationMenuLink
							className={`${navigationMenuTriggerStyle()} text-baselg font-bold`}
						>
							News
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className,
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";

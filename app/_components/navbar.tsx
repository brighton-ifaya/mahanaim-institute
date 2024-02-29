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
import { Fullscreen } from "lucide-react";

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

// Todo: move this component out of the root layout file.
export function NavigationMenuDemo() {
	return (
		<NavigationMenu className="flex flex-col max-w-none pb-5">
			<div>
				<Image
					className="relative mt-5 mb-5"
					src="/mclogo.png"
					alt="logo"
					width={230}
					height={230}
				/>
			</div>
			<div className="relative w-full h-[1px] mb-2">
				<Image
					src="/navigationBarLine.svg"
					alt="logo"
					layout="fill"
					objectFit="cover"
				/>
			</div>

			<NavigationMenuList className="space-x-10">
				<NavigationMenuItem>
					<Link href="/" legacyBehavior passHref>
						<NavigationMenuLink
							className={`${navigationMenuTriggerStyle()} font-medium`}
						>
							Home
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger className="font-medium">
						About Us
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className=" flex flex-col w-[200px] p-4 md:w-[200px] lg:w-[350px]">
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
				<NavigationMenuItem>
					<NavigationMenuTrigger className="font-medium">
						Courses
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className=" flex flex-col w-[200px] p-4 md:w-[200px] lg:w-[350px] ">
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
							className={`${navigationMenuTriggerStyle()} font-medium`}
						>
							News
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger className="font-medium">
						Quick Links
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className=" flex flex-col w-[200px] p-4 md:w-[200px] lg:w-[350px] ">
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
							className={`${navigationMenuTriggerStyle()} font-medium`}
						>
							News
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
			<div className="relative w-full h-[1px] mt-2">
				<Image
					src="/navigationBarLine.svg"
					alt="logo"
					layout="fill"
					objectFit="cover"
				/>
			</div>
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
						"block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className,
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";

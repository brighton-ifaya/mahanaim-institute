import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

import { NavigationMenuDemo } from "./_components/navbar";
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: "400", style: "normal", subsets: ["latin"] });

export const metadata: Metadata = {
	title: "School Management System",
	description: "School Management System",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.className}`}>
				<NavigationMenuDemo />
				{children}
			</body>
		</html>
	);
}

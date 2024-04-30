import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
	icon: string;
	title: string;
	description: string;
}

export default function HomeCard({ icon, title, description }: Props) {
	return (
		<div className="flex flex-col border border-zinc-300 rounded-sm items-center w-[500px] p-4">
			<Image src={icon} width={50} height={50} alt="" />
			<p className="text-black text-xl text-center font-bold mt-3">{title}</p>
			<p className="text-[#606060] text-l text-center font-medium mt-3 p-3">
				{description}
			</p>
		</div>
	);
}

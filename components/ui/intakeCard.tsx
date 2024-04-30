import * as React from "react";
import { cn } from "@/lib/utils";

interface Props {
	text: string;
}

export default function Intake({ text }: Props) {
	return (
		<div className="flex bg-black bg-opacity-60 p-5 rounded-sm">
			<a className="text-white text-4xl font-extrabold">
				{text} <br /> ONGOING
			</a>
		</div>
	);
}

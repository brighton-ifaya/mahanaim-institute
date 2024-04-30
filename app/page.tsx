"use client";
import App from "next/app";
import Image from "next/image";
import Link from "next/link";
import { Router } from "next/router";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Controller,
	ControllerProps,
	FieldPath,
	FieldValues,
	FormProvider,
	SubmitHandler,
	useForm,
	useFormContext,
} from "react-hook-form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import Intake from "@/components/ui/intakeCard";
import HomeCard from "@/components/ui/homeCard";
import { Button } from "@/components/ui/button";

const form = FormProvider;
const schema = z.object({
	name: z.string().min(1, { message: "Required" }),
	number: z.string().min(10, { message: "Number Required" }),
	email: z.string().email({ message: "Email Required" }),
});

export default function Home() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schema),
	});

	const onSubmit = (data: any) => console.log(data);

	return (
		<div className="mb-3">
			<div className="flex flex-col justify-center items-center">
				<div className="relative">
					<Image src="/slider1.png" width={1100} height={500} alt="" />
					<div className="absolute bottom-0 left-0 w-full h-full pb-1 pl-2 flex justify-start items-end">
						<Intake text={"September Intake 2024"} />
					</div>
				</div>
				<div className="bg-amber-600 p-4 mt-3 rounded-sm">
					<a className="text-white text-4xl font-extrabold">
						{" "}
						Why Mahanaim College?
					</a>
				</div>
				<div className="bg-blue-700 w-[1100px] p-12 mt-2 rounded-sm">
					<p className="text-white text-center text-2xl font-semibold">
						Mahanaim College programs are structure to cater for our
						students&apos; holistic education. These activities help students
						discover their interests and talents while developing values and
						competencies that will prepare them for a rapidly changing world.
					</p>
				</div>
				<div className="flex flex-row space-x-6 w-[1100px] justify-center mt-4">
					<HomeCard
						icon="/bible-logo.svg"
						title="Faith"
						description="By participating in chappel class and mind education, Heart-to-heart fellowship, insightful lectures, and various projects will broaden the spectrum of their spiritual senses."
					/>
					<HomeCard
						icon="/academiccap-logo.svg"
						title="Academics"
						description="Mahanaim College offers an unrivaled Academic environment that provides students with the tools and techniques to become more impactful leaders and unlocking a higher purpose in them."
					/>
					<HomeCard
						icon="money-logo.svg"
						title="Affordable"
						description="We provide an affordable programs without any hidden fees to make the student's education as efficient and convenient as possible."
					/>
				</div>
				<form
					className="flex flex-col items-center w-[1100px] border border-zinc-300 rounded-sm mt-4"
					onSubmit={handleSubmit(onSubmit)}
				>
					<p className="text-black text-2xl font-bold mt-3 mb-3">
						Inquiry Form
					</p>
					<div className="flex flex-col space-y-6 mb-8 w-[530px]">
						<div>
							<input
								type="text"
								placeholder="Your name"
								className="block w-full h-formFieldHeight bg-formBgField outline-none border-b-2 py-2 px-4 text-black focus:border-gray-900 placeholder-formFieldText"
								{...register("name")}
							/>
							{typeof errors.name?.message === "string" && (
								<p className="text-red-600">{errors.name?.message}</p>
							)}
						</div>
						<div>
							<input
								type="text"
								placeholder="Enter your mobile number"
								className="block w-full h-formFieldHeight bg-formBgField outline-none border-b-2 py-2 px-4 text-black focus:border-gray-900 placeholder-formFieldText"
								{...register("number")}
							/>
							{typeof errors.number?.message === "string" && (
								<p className="text-red-600">{errors.number?.message}</p>
							)}
						</div>
						<div>
							<input
								type="email"
								placeholder="Enter your email"
								className="block w-full h-formFieldHeight bg-formBgField outline-none border-b-2 py-2 px-4 text-black focus:border-gray-900 placeholder-formFieldText"
								{...register("email")}
							/>
							{typeof errors.email?.message === "string" && (
								<p className="text-red-600">{errors.email?.message}</p>
							)}
						</div>

						{/* <Select>
							<SelectTrigger className="w-[180px]">
								<SelectValue
									placeholder="Course"
									className="placeholder-formFieldText"
								/>
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="course1">course1</SelectItem>
								<SelectItem value="course2">course2</SelectItem>
								<SelectItem value="course3">course3</SelectItem>
							</SelectContent>
						</Select> */}
						<Button
							type="submit"
							className="bg-amber-600 text-white font-semibold text-lg py-2 rounded-sm"
						>
							Get in
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}

import React from "react";
import Link from "next/link";
import Image from "next/image";
import contact_us from "../contacts/page";

function Navbar() {
	return (
		<div className="mt-3">
			<div className="flex justify-center">
				<Image src="/mclogo.png" alt="logo" width={300} height={300} />
			</div>
			<ul className="flex row-span-1 space-x-5 justify-center mt-3">
				<Link href={"../"}>Home</Link>
				<div>About us</div>
				<div>Courses</div>
				<Link href={"../news"}>News</Link>
				<div>Quick Links</div>
				<Link href={"../contacts"}>Contact us</Link>
			</ul>
		</div>
	);
}

export default Navbar;

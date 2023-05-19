import React from "react";
import Link from "./Link";

const Navbar = () => {
	return (
		<nav className='flex flex-row justify-between items-center'>
			<ul className='flex flex-row justify-between w-full'>
				<Link name='Home' />
                <Link name='About' />
                <Link name='Contact' />
			</ul>
		</nav>
	);
};

export default Navbar;

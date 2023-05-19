import Typical from "react-typical";
import Codeblinx from "../assets/codeblinx_logo.svg";
import Navbar from "../components/nav/Navbar";
const Root = () => {
	const steps = [
		"Python",
		1000,
		"JavaScript",
		1000,
		"TypeScript",
		1000,
		"Java",
		1000,
		"Kotlin",
		1000,
		"Swift",
		1000,
		"Go",
		1000,
		"Rust",
		1000,
		"HTML",
		1000,
		"CSS",
		1000,
		"SQL",
		1000,
	];

	return (
		<>
			<main className='bg-background min-h-screen'>
				<header
					className='flex flex-col'
					style={{
						backgroundColor: "#170730",
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236760af' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
					}}>
					<div className='text-4xl md:text-7xl text-center text-gray-400 font-bold'>
						<div className='text-2xl md:text-4xl text-center text-gray-400 font-bold flex'>
							<img
								src={Codeblinx}
								alt='Codeblinx'
								className=' w-24'
							/>
							<Navbar />
						</div>
					</div>
				</header>
				<div className='text-4xl md:text-7xl text-center text-gray-400 font-bold mt-10'>
					<h1>
						THE FUTURE,{" "}
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-tertiary to-secondary animate-pulse'>
							IN YOUR HANDS{" "}
						</span>
					</h1>
					<div className='text-2xl md:text-4xl text-center text-gray-400 font-bold mt-10 justify-center'>
					<h2 className='text-2xl md:text-4xl mt-5'>
						Learn{" "}
						<span className='ms-3'>
							<Typical
								steps={steps}
								loop={Infinity}
								wrapper='b'
								className='text-transparent bg-clip-text bg-gradient-to-r from-tertiary to-secondary'
							/>
						</span>
					</h2>
					</div>
				</div>
				<div className='bg-background'></div>
			</main>
		</>
	);
};

export default Root;

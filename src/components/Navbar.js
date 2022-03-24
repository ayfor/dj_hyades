import "./Navbar.css";

const Navbar = () => {
	return (
		<nav className="bg-white shadow-lg w-100 navbar">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex space-x-7">
						<div className="md:flex items-center space-x-1">
							<button className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">
								Home
							</button>
							<button className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">
								Services
							</button>
							<button className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">
								About
							</button>
							<button className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">
								Contact Us
							</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

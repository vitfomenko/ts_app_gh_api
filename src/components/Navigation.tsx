import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
			<h3>GitHub search</h3>
			<span>
				<NavLink
					to="/"
					className="hover:hover:bg-gray-700 mr-2"
				>
					Home
				</NavLink>
				<NavLink
					to="/favourites"
					className="hover:hover:bg-gray-700 mr-2"
				>
					Favourites
				</NavLink>
			</span>
		</nav>
	);
};

export default Navigation;

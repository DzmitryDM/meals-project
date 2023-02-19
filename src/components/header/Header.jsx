import React from "react";
import "./Header.css";

function Header() {
	return (
		<nav className="#3f51b5 indigo header">
			<div className="nav-wrapper">
				<a
					href="https://dzmitrydm.github.io/meals-project"
					target="blank"
					className="brand-logo"
				>
					{" "}
					Meal
				</a>
			</div>
		</nav>
	);
}

export default Header;

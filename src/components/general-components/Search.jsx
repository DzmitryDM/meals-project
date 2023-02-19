import React, { useState } from "react";
import "./general-components.css";

function Search({ handleSearch = Function.prototype }) {
	const [value, SetValue] = useState([]);

	const handleKey = (e) => {
		if (e.key === "Enter") {
			handleSubmit();
		}
	};

	const handleSubmit = () => {
		handleSearch(value);
	};

	return (
		<div className="row search">
			<div className="input-field col s6 inputFlex">
				<input
					type="text"
					className="validate"
					placeholder="Search"
					onKeyDown={handleKey}
					value={value}
					onChange={(e) => SetValue(e.target.value)}
				/>
				<button className="btn btnSearch" onClick={handleSubmit}>
					Search
				</button>
			</div>
		</div>
	);
}

export default Search;

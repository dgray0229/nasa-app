import { useCallback, useState } from "react";
import { styled } from "styled-components";
import { ImageGrid } from "../components";

const Directory = styled.div`
	display: flex;
	flex-direction: column;
	align-items: left;
	list-style: none;
	list-style-position: inside;
	text-align: left;
	font-size: 1.5rem;
	width: 100%;
`;
function Images() {
	const [date, setDate] = useState("2020-11-1");
	const changeDate = useCallback((e) => {
		const { value } = e.target;
		setDate(value);
	}, []);

	return (
		<>
			<h1>Mars Images By Date</h1>
			<label htmlFor="date">Earth Date:</label>
			<input name="date" type="date" placeholder="Please enter a date" value={date} onChange={changeDate} />
			<ImageGrid queryDate={date} />
			<Directory>
				<li>AT - Atmospheric Temperature</li>
				<li>HWS - Horizontal Wind Speed Sensor</li>
				<li>PRE - Atmospheric Pressure Sensor</li>
			</Directory>
		</>
	);
}

export default Images;

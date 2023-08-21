import { useState, Suspense } from "react";
import { WeatherGrid } from "../components";
function Weather() {
	const [date, setDate] = useState("2020-07-14");
	const [selectValue, setSelectValue] = useState("AT");

	const handleSelectValue = (e) => {
		setSelectValue(e.target.value);
    };
	return (
		<>
			<div>
				<h1>Mars Weather</h1>
				<label>Sort By:</label>
				<select value={selectValue} onChange={handleSelectValue}>
					<option value="AT">Temperature</option>
					<option value="HWS">Wind Speed</option>
					<option value="PRE">Pressure</option>
				</select>
			</div>
			<Suspense fallback={<div>Loading...</div>}>
				<WeatherGrid queryDate={date} sortBy={selectValue} />
			</Suspense>
		</>
	);
}

export default Weather;

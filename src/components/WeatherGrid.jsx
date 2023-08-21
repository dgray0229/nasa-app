import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";

const TableContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
`;
const Table = styled.table`
	border: 1px solid black;
	margin: 1rem;
	padding: 1rem;
`;
function WeatherGrid({ queryDate = "2020-07-14", selectValue = "AT" }) {
	const [solKeys, setSolKeys] = useState([]);
	const [solData, setSolData] = useState({});
	const [validityChecks, setValidityChecks] = useState({});
	const [queryMessage, setQueryMessage] = useState("");

	// const sortedSolKeys = useMemo((sortBy) => {
	// 	const arrayIsValid = Array.isArray(solKeys) && solKeys.length > 0;
	// 	if (arrayIsValid && sortBy === "AT") {
	// 		return solKeys.sort((a, b) => {
	// 			solData[a]?.AT?.av - solData[b]?.AT?.av;
	// 		});
	// 	}
	// 	if (arrayIsValid && sortBy === "HWS") {
	// 		return solKeys.sort((a, b) => {
	// 			solData[a]?.HWS?.av - solData[b]?.HWS?.av;
	// 		});
	// 	}
	// 	if (arrayIsValid && sortBy === "PRE") {
	// 		return solKeys.sort((a, b) => {
	// 			solData[a]?.PRE?.av - solData[b]?.PRE?.av;
	// 		});
	// 	}
	// }, [solData, solKeys]);
	const renderTables = () => {
		return solKeys.map((solKey, index) => (
			<Table key={`sol_key-${solKey}-index-${index}`}>
				<tr>
					<th>Data point:</th>
					<td>{solKey}</td>
				</tr>
				<tr>
					<th>Temperature (AVG):</th>
					<td>{solData[solKey]?.AT?.av}</td>
				</tr>
				<tr>
					<th>Wind (AVG):</th>
					<td>{solData[solKey]?.HWS?.av}</td>
				</tr>
				<tr>
					<th>Pressure (AVG):</th>
					<td>{solData[solKey]?.PRE?.av}</td>
				</tr>
				<tr>
					<th>First UTC:</th>
					<td>{solData[solKey]?.First_UTC}</td>
				</tr>
				<tr>
					<th>Last UTC:</th>
					<td>{solData[solKey]?.Last_UTC}</td>
				</tr>
			</Table>
		));
	};
	useEffect(() => {
		const fetchWeather = async () => {
			setQueryMessage("Loading weather data...");
			try {
				const response = await fetch(
					`https://mars.nasa.gov/rss/api/?feed=weather&category=insight_temperature&earth_date=${queryDate}&api_key=${
						import.meta.env.VITE_NASA_API_KEY
					}&feedtype=json&ver=1.0`
				);
				return await response.json();
			} catch (error) {
				setQueryMessage(error.message);
			}
		};
		const setWeatherData = (weatherData) => {
			setQueryMessage("Loading weather data...");
			try {
				const { sol_keys, validity_checks, ...data } = weatherData;
				setSolKeys(sol_keys);
				setValidityChecks(validity_checks);
				setSolData(data);
			} catch (error) {
				setQueryMessage(error.message);
			}
		};
		const handleWeatherData = async () => {
			const data = await fetchWeather();
			setWeatherData(data);
		};
		handleWeatherData();
	}, [queryDate, selectValue]);
	return <TableContainer>{renderTables()}</TableContainer>;
}

export default WeatherGrid;

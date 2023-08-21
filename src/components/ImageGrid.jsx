import { useEffect, useState } from "react";
import styled from "styled-components";

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 1rem;
	margin: 1rem;
`;

const GridItem = styled.div`
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const GridImage = styled.img`
	max-width: 300px;
	max-height: 300px;
	object-fit: contain;
`;

function ImageGrid({ queryDate = "2020-07-14" }) {
	const [images, setImages] = useState([]);
	const [queryMessage, setQueryMessage] = useState("");
	useEffect(() => {
		const fetchImages = async () => {
			setQueryMessage("Loading images...");
			try {
				const response = await fetch(
					`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${queryDate}&api_key=${
						import.meta.env.VITE_NASA_API_KEY
					}&page=1`
				);
				const data = await response.json();
				setImages(data.photos);
			} catch (error) {
				setQueryMessage(error.message);
			}
		};

		fetchImages();
	}, [queryDate]);

	return (
		<GridContainer>
			{images.length ? (
				images.map((image) => {
					return (
						<GridItem key={image.id}>
							<GridImage src={image.img_src} alt={image.rover.name} />
						</GridItem>
					);
				})
			) : (
				<strong>{queryMessage}</strong>
			)}
		</GridContainer>
	);
}

export default ImageGrid;

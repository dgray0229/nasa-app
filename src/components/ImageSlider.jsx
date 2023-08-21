import { useEffect, useState } from "react";
import styled from "styled-components";

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 1rem;
	margin: 1rem;
    position: relative;
    width: 100%;
    max-height: 150px;
`;

const GridItem = styled.div`
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const GridImage = styled.img`
	height: 10rem;
	object-fit: cover;
	width: 10rem;
`;

// Create Previous and Next Buttons
const SliderButton = styled.button`
	background-color: transparent;
	border: none;
	color: #8d6b3d;
	font-size: 7rem;
	font-weight: light;
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	margin: 4px 2px;
	-webkit-transition-duration: 0.4s; /* Safari */
	transition-duration: 0.4s;
	cursor: pointer;
	position: absolute;
`;
const PreviousButton = styled(SliderButton)`
    left: -7rem;
`;
const NextButton = styled(SliderButton)`
    right: -7rem;
`;

function ImageSlider({ queryDate = "2020-07-14" }) {
	const [images, setImages] = useState([]);
	const [page, setPage] = useState(0);
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
				// group images by 5 and put them in their own array
				const groupedImages = [];
				for (let i = 0; i < data.photos.length; i += 5) {
					groupedImages.push(data.photos.slice(i, i + 5));
				}
				setImages(groupedImages);
				setQueryMessage("");
			} catch (error) {
				setQueryMessage(error.message);
			}
		};

		fetchImages();
	}, [queryDate]);

	return (
		<>
			<GridContainer>
				{page - 1 >= 0 && <PreviousButton onClick={() => setPage(page - 1)}>
					&lt;
				</PreviousButton>}
				{images.length ? (
					images[page].map((image) => {
						return (
							<GridItem key={image.id}>
								<GridImage src={image.img_src} alt={image.rover.name} />
							</GridItem>
						);
					})
				) : (
					<strong>{queryMessage}</strong>
				)}
			{page + 1 < images.length && <NextButton onClick={() => setPage(page + 1)}>&gt;</NextButton>}
			</GridContainer>
		</>
	);
}

export default ImageSlider;

import styled from "styled-components";
import { ImageSlider } from "../components";
const AboutContainer = styled.div`
	display: grid;
	grid-template-columns: 5fr 7fr;
	grid-gap: 1rem;
`;
const Heading = styled.h1`
	margin-left: 0;
	text-align: left;
	width: 100%;
`;
const ButtonLink = styled.a`
	background-color: #ded6c9;
	border: none;
	border-radius: 0.5rem;
	color: #000;
	cursor: pointer;
	display: inline-block;
	font-weight: bold;
	padding: 1rem;
	margin: 2rem 1rem;
	text-decoration: none;
`;
const Figure = styled.figure`
	margin: 0;
`;
const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
const Text = styled.p`
	margin: 0.5rem;
	text-align: left;
	font-size: 1.25rem;
	line-height: 1;
	letter-spacing: 0.1rem;
`;
const LinkContainer = styled.div`
	display: flex;
	justify-content: center;
`;
const SliderContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 2rem 1rem;
`;
function About() {
	return (
		<>
			<Heading>About The Program</Heading>
			<AboutContainer>
				<Figure>
					<Image
						src="https://mars.nasa.gov/system/feature_items/images/6037_msl_banner.jpg"
						alt="Curiosity Rover"
					/>
					<figcaption>Curiosity Rover</figcaption>
				</Figure>
				<div>
					<Text>
						Part of NASA's Mars Science Laboratory mission, Curiosity is the
						largest and most capable rover ever sent to Mars. It launched{" "}
						<span>Nov. 26</span>, 2011 and landed on Mars at 10:32 p.m. PDT on
						Aug. 5, 2012 (1:32 a.m. EDT on Aug. 6, 2012).
					</Text>
					<Text>
						Curiosity set out to answer the question:{" "}
						<i>
							Did Mars ever have the right environmental conditions to support
							small life forms called microbes?
						</i>{" "}
						Early in its mission, Curiosity's scientific tools found chemical
						and mineral evidence of past habitable environments on Mars. It
						continues to explore the rock record from a time when Mars could
						have been home to microbial life.
					</Text>
					<LinkContainer>
						<ButtonLink href="/images">View Images By Date</ButtonLink>
						<ButtonLink href="/weather">View Weather</ButtonLink>
					</LinkContainer>
				</div>
			</AboutContainer>
			<SliderContainer>
				<h2>Curiosity Rover Images From Today</h2>
				<ImageSlider />
			</SliderContainer>
		</>
	);
}

export default About;

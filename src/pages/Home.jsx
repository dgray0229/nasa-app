function Home() {
	return (
		<>
			<div title="Page 1">
				<div>
					<div>
						<div>
							<p>
								Hey!
								<br /> We&rsquo;re happy to let you know that you passed the
								phone interview, so now we would like to get to know you better
								with a task.
							</p>
							<p>
								The aim of this task is to give you insight into the day to day
								of this role, and let us see your creativity, skills and
								experience.
							</p>
							<p>
								As a frontend developer, you will be tasked with adding new
								features to our client app which is used by several teams at
								ebay. Adding new features requires familiarity with frontend
								development and react library, it also requires good coding
								skills and good planning. We hope you will enjoy the challenge
								and wish you good luck.
							</p>
							<p>The challenge:</p>
							<p>
								Looking at the stars is great, watching actual images and data
								from mars is even better. You will need to integrate with NASA
								APIs and show images and weather information from mars.
							</p>
							<p>What will you need to do:</p>
							<ol>
								<li>
									<p>
										Create a client application that will use the reactJS
										library, no UI lib is allowed (like bootstrap.. etc.)
									</p>
								</li>
								<li>
									<p>
										Create 3 pages, Information for each page is detailed in the
										section below.
									</p>
								</li>
								<li>
									<p>
										Enable navigation between pages and illustrate the current
										page in the browser url.
									</p>
								</li>
								<li>
									<p>Separate your code into components and pages.</p>
								</li>
								<li>
									<p>
										Use of a state management library is allowed but not
										required.
									</p>
								</li>
								<li>
									<p>
										Use NASA provided API to show real images and weather
										information in the required pages.
									</p>
								</li>
								<li>
									<p>
										Pixel perfect - We expect you to stick to the provided
										mockups, responsiveness can give extra points but is
									</p>
									<p>not a must. Try and use correct css.</p>
								</li>
								<li>
									<p>
										CSS - try and use the minimum amount of css rules, and HTML
										tags.
									</p>
								</li>
								<li>
									<p>
										File structure, try and create a good file structure with
										good separation of components.
									</p>
								</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
			<div title="Page 2">
				<div>
					<div>
						<div>
							<p>Pages requirements:</p>
							<p>
								A UI mockup is provided, you can use your imagination to make it
								even better.
							</p>
							<ol>
								<li>
									<p>
										About page - This page should contain Curiosity rover image
										and on the right side information about the mission, this
										information can be found in NASA website
										<br /> https://mars.nasa.gov/msl/home/
										,youshouldalsoshowbuttonsthatleadtotheothertwopages,inthe
										bottom of the screen show a carousel of images from the last
										day.
									</p>
								</li>
								<li>
									<p>
										Images by date page - This page allows the user to enter a
										date and get the relevant images for that date. (Bonus -
										when hovering on images you can see the image information.)
									</p>
								</li>
								<li>
									<p>
										Mars weather - This page should show mars weather
										information based on the data points provided in the api.
										(Bonus - use a graph library like chartjs to show data in
										graphs.
									</p>
								</li>
							</ol>
							<p>NASA APIs</p>
							<p>https://api.nasa.gov/index.html#browseAPI</p>
							<p>Information for each api is listed in this page</p>
							<p>Mars Rover Photos - Example for getting images:</p>
							<p>
								https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2020-11-1&amp;api_key=DEMO_KEY&amp;page=1
							</p>
							<p>
								Since there are not always images, you can use the following
								parameter in this url: earth_date=2020-07-14 and not use the
								current date
							</p>
							<p>
								InSight: Mars Weather Service API - example for getting weather
								information:
							</p>
							<p>
								https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&amp;feedtype=json&amp;ver=1.0
							</p>
							<p>
								Since there are not always images, you can add the following
								parameter to this url:earth_date=2020-07-14 and not use the
								current date
							</p>
							<p>More information about this API:</p>
							<p>
								https://api.nasa.gov/assets/insight/InSight%20Weather%20API%20Documentation.pdf
							</p>
							<p>
								Once you finish the home challenge send a link to the github
								where this project is located. If you will also deploy it to a
								website, you will get extra points.
								<br /> Good Luck.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div title="Page 3">
				<div>
					<div>
						<div>
							<p>
								eBay is one of the world&rsquo;s largest online marketplaces
								with 1.5 billion live listings and 174 million active users.
								eBay is also one of the fastest growing shopping destinations
								for a comprehensive set of products from thousands of trusted
								stores from across the Web. Whether buying new or used, everyday
								use or luxury, commonplace or rare, trendy or one-of-a-kind
								&ndash; if it exists in the world, it&rsquo;s probably for sale
								on eBay. eBay is powered by the many sellers and small
								businesses on its platform and driven by its purpose to empower
								people and create economic opportunity.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;

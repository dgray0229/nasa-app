import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styled from "styled-components";
import { About, Home, Images, Weather } from "./pages";
import { Layout } from "./components";
import "./App.css";

const MainContainer = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0 1rem;
	max-width: 100rem;
`;
const router = createBrowserRouter([
	{
		path: "/",
		Component: Layout,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "images",
				element: <Images />,
			},
			{
				path: "weather",
				element: <Weather />,
			},
			{
				path: "*",
				element: <div>Not Found</div>,
			},
		],
	},
]);

function App() {
	return (
		<MainContainer>
			<RouterProvider router={router} />
		</MainContainer>
	);
}

export default App;

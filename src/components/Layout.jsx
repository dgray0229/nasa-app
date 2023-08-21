import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

const Nav = styled.nav`
	display: flex;

	a {
		color: #8d6b3d;
	}
`;
function Navigation() {

	return (
		<Nav>
			<a href="/">Home</a>
			<a href="/about">About</a>
			<a href="/images">Images</a>
			<a href="/weather">Weather</a>
		</Nav>
	);
}

function Layout() {
	return (
		<>
			<Navigation />
			<Outlet />
		</>
	)
}

export default Layout;

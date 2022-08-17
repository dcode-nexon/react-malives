import styled, { ThemeProvider } from 'styled-components';
import size from '../DeviceSize';

const NavWrap = styled.nav`
	position: relative;
	width: 85%;
	height: 35px;
	background: #222;
	margin-left: 15%;

	@media screen and (max-width: ${({ theme }) => theme.web_b}) {
		width: 100%;
		margin-left: 0%;
	}
`;

function Nav() {
	return (
		<ThemeProvider theme={size}>
			<NavWrap>Nav</NavWrap>
		</ThemeProvider>
	);
}

export default Nav;

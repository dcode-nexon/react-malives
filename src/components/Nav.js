import styled, { ThemeProvider } from 'styled-components';
import size from '../DeviceSize';

const NavWrap = styled.nav`
	position: relative;
	width: 85%;
	height: 35px;
	background: #222;
	margin-left: 15%;
	transition: 0.5s;

	@media screen and (max-width: ${({ theme }) => theme.web_b}) {
		width: 100%;
		margin-left: 0%;
	}
	@media screen and (max-width: ${({ theme }) => theme.mo_m}) {
		display: none;
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

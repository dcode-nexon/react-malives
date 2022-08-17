import styled, { ThemeProvider } from 'styled-components';
import size from '../DeviceSize';

const HeaderWrap = styled.header`
	position: fixed;
	width: 15%;
	height: 100%;
	background: #fff;
	top: 0;
	left: 0;

	@media screen and (max-width: ${({ theme }) => theme.web_b}) {
		position: relative;
		width: 100%;
		height: 80px;
	}
	@media screen and (max-width: ${({ theme }) => theme.mo_m}) {
		height: 130px;
	}
	@media screen and (max-width: ${({ theme }) => theme.mo_s}) {
		position: fixed;
		height: 100%;
		background-color: transparent;
		z-index: 5;
	}
`;

function Header() {
	return (
		<ThemeProvider theme={size}>
			<HeaderWrap></HeaderWrap>
		</ThemeProvider>
	);
}

export default Header;

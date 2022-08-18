import styled, { ThemeProvider } from 'styled-components';

const utilImgs = [
	process.env.PUBLIC_URL + '/img/util1.png',
	process.env.PUBLIC_URL + '/img/util2.png',
	process.env.PUBLIC_URL + '/img/util3.png',
	process.env.PUBLIC_URL + '/img/util4.png',
];

const NavWrap = styled.nav`
	position: relative;
	width: 85%;
	height: 35px;
	background: #222;
	margin-left: 15%;
	transition: 0.5s;

	a {
		position: absolute;
		top: 5px;

		&:nth-of-type(1) {
			left: 10px;
		}
		&:nth-of-type(2) {
			left: 150px;
		}
		&:nth-of-type(3) {
			right: 90px;
		}
		&:nth-of-type(4) {
			right: 10px;
		}
	}

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
		<NavWrap>
			{utilImgs.map((item) => (
				<a href='#' key={item}>
					<img src={item} alt={item} />
				</a>
			))}
		</NavWrap>
	);
}

export default Nav;

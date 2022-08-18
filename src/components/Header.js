import styled, { ThemeProvider } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeader } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import size from '../DeviceSize';

const logoImg = {
	logo1: process.env.PUBLIC_URL + '/img/logo1.png',
	logo2: process.env.PUBLIC_URL + '/img/logo2.png',
};

const menuItem = [
	{ ico: faHeader, name: 'Hotel' },
	{ ico: faBuilding, name: 'Facility' },
	{ ico: faBriefcase, name: 'Business' },
	{ ico: faUtensils, name: 'Restaurant' },
];
const snsImgs = [
	process.env.PUBLIC_URL + '/img/sns1.png',
	process.env.PUBLIC_URL + '/img/sns2.png',
	process.env.PUBLIC_URL + '/img/sns3.png',
	process.env.PUBLIC_URL + '/img/sns4.png',
	process.env.PUBLIC_URL + '/img/sns5.png',
];

const HeaderWrap = styled.header`
	position: fixed;
	width: 15%;
	height: 100%;
	background: #fff;
	top: 0;
	left: 0;
	transition: 0.5s;

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
const Logo = styled.h1`
	width: 180px;
	height: 136px;
	background-image: url(${(props) => props.img.logo1});
	background-repeat: no-repeat;
	background-position: 0 0;
	background-size: contain;
	position: absolute;
	top: 70px;
	left: 50%;
	margin-left: -90px;
	text-indent: -9999px;

	@media screen and (max-width: ${({ theme }) => theme.web_b}) {
		width: 200px;
		height: 40px;
		background-image: url(${(props) => props.img.logo2});
		top: 20px;
		left: 20px;
		margin-left: 0px;
	}
	@media screen and (max-width: ${({ theme }) => theme.mo_m}) {
		position: relative;
		left: 0px;
		height: 45px;
		margin: 0 auto;
	}
	@media screen and (max-width: ${({ theme }) => theme.mo_s}) {
		width: 140px;
		height: 90px;
		left: 50%;
		margin-left: -70px;
		background-image: url(${(props) => props.img.logo1});
	}
`;
const Gnb = styled.ul`
	position: absolute;
	top: 300px;
	right: 57px;

	a {
		display: block;
		padding: 8px 30px;
		font: 17px/1.8 'poiret one';
		color: #555;
		text-align: left;
		transition: 0.5s;

		svg {
			margin-right: 13px;
		}

		&:hover {
			color: skyblue;
		}
	}

	@media screen and (max-width: ${({ theme }) => theme.web_b}) {
		top: 20px;
		right: 200px;

		li {
			float: left;
		}
	}
	@media screen and (max-width: ${({ theme }) => theme.web_m}) {
		right: 30px;
	}
	@media screen and (max-width: ${({ theme }) => theme.web_s}) {
		right: 10px;

		li a {
			padding: 10px 10px;
		}
	}
	@media screen and (max-width: ${({ theme }) => theme.mo_m}) {
		width: 25%;

		li a {
			padding: 4px;
			text-align: center;
		}
	}
	@media screen and (max-width: ${({ theme }) => theme.mo_s}) {
		width: 250px;
		top: 140px;
		right: 50%;
		margin-right: -125px;

		li {
			width: 100%;
			a {
				display: block;
				width: 100%;
				background: #000;
				margin: 8px 0px;
				border-radius: 10px;
				opacity: 0.5;
				color: #fff;

				&:hover {
					opacity: 1;
					transform: scale(1.1);
				}
			}
		}
	}
`;
const Sns = styled.ul`
	width: 90px;
	height: 47px;
	position: absolute;
	bottom: 50px;
	right: 50%;
	margin-right: -45px;

	a {
		float: left;
	}

	@media screen and (max-width: ${({ theme }) => theme.web_b}) {
		bottom: 20px;
		right: 80px;
	}
	@media screen and (max-width: ${({ theme }) => theme.web_m}) {
		display: none;
	}
`;

function Header() {
	return (
		<ThemeProvider theme={size}>
			<HeaderWrap>
				<Logo img={logoImg}>Logo</Logo>
				<Gnb>
					{menuItem.map((item) => (
						<li key={item.name}>
							<a href='#'>
								<FontAwesomeIcon icon={item.ico} />
								{item.name}
							</a>
						</li>
					))}
				</Gnb>

				<Sns>
					{snsImgs.map((item) => (
						<a href='#' key={item}>
							<img src={item} alt={item} />
						</a>
					))}
				</Sns>
			</HeaderWrap>
		</ThemeProvider>
	);
}

export default Header;

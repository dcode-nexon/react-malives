import styled, { css } from 'styled-components';

const BoxWrap = styled.article`
	float: left;
	background-color: ${(props) => props.bg || 'gray'};
	width: 20%;
	height: 260px;
	transition: 0.5s;
	animation: scale 1s 1;

	@keyframes scale {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
	}

	> div {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
		cursor: pointer;
		position: relative;

		h1 {
			font: 12vw/1 'Poiret one';
			color: #fff;
			position: absolute;
			bottom: -1.5vw;
			right: 0;
		}

		${(props) =>
			props.type === 'bg' &&
			css`
				background-image: url(${(props) => props.bg});
				background-size: cover;
				background-position: center;

				span {
					font-size: 60px;
					color: #fff;
					position: absolute;
					bottom: 0;
					right: 20px;
					transform: scale(10);
					opacity: 0;
					transition: 0.4s;
					font-family: 'Poiret One';
				}
			`}

		${(props) =>
			props.type === 'txt' &&
			css`
				color: #666;
				background-color: ${(props) => props.bg || '#fff'};
				padding: 40px 30px;
				transition: 1s;

				svg {
					font-size: 300px;
					color: #b2effc;
					opacity: 0;
					position: absolute;
					bottom: -70px;
					right: -200px;
					transition: 0.7s;
					z-index: 0;
				}

				strong,
				p {
					font-size: 30px;
					font-weight: normal;
					font-family: 'poiret one';
					line-height: 1.6;
					color: #888;
					margin-bottom: 20px;
					transition: 1s;
					position: relative;
					z-index: 2;
				}
				em {
					font-size: 12px;
					color: #999;
				}
			`}
	}

	//hover motion
	&:hover {
		> div {
			${(props) =>
				props.type === 'bg' &&
				css`
					span {
						opacity: 1;
						transform: scale(1);
					}
				`}

			${(props) =>
				props.type === 'txt' &&
				css`
					background: #6ce2fb;
					color: #fff;

					svg {
						right: 0;
						opacity: 0.8;
					}
					strong,
					em {
						color: #fff;
					}
				`}
		}
	}

	&:nth-of-type(1) {
		width: 60%;
		height: 520px;
		background: #ddd;
	}
	&:nth-of-type(2) {
		width: 40%;
		background: #ccc;
	}
	&:nth-of-type(3) {
		width: 20%;
		background: #bbb;

		svg {
			animation: ani linear 3s infinite;
		}

		@keyframes ani {
			0% {
				transform: rotate(0deg);
			}
			100% {
				transform: rotate(360deg);
			}
		}
	}
	&:nth-of-type(4) {
		width: 20%;
		background: #aaa;
	}
	&:nth-of-type(5) {
		width: 20%;
		background: #999;
	}
	&:nth-of-type(6) {
		width: 40%;
		background: #888;
	}
	&:nth-of-type(7) {
		width: 20%;
		background: #777;
	}
	&:nth-of-type(8) {
		width: 20%;
		background: #666;
	}
	&:nth-of-type(9) {
		width: 40%;
		background: #555;
	}
	&:nth-of-type(10) {
		width: 20%;
		background: #444;
	}
	&:nth-of-type(11) {
		width: 20%;
		background: #333;
	}
	&:nth-of-type(12) {
		width: 20%;
		background: #222;
	}

	@media screen and (max-width: ${({ theme }) => theme.web_m}) {
		&:nth-of-type(1) {
			width: 75%;
			> div h1 {
				font-size: 16vw;
				bottom: -2vw;
			}
		}
		&:nth-of-type(2) {
			width: 25%;
		}
		&:nth-of-type(3) {
			width: 25%;
		}
		&:nth-of-type(4) {
			width: 25%;
		}
		&:nth-of-type(5) {
			width: 25%;
		}
		&:nth-of-type(6) {
			width: 50%;
		}
		&:nth-of-type(7) {
			width: 50%;
		}
		&:nth-of-type(8) {
			width: 25%;
		}
		&:nth-of-type(9) {
			width: 25%;
		}
		&:nth-of-type(10) {
			width: 50%;
		}
		&:nth-of-type(11) {
			width: 25%;
		}
		&:nth-of-type(12) {
			width: 25%;
		}
	}
	@media screen and (max-width: ${({ theme }) => theme.web_s}) {
		&:nth-of-type(1) {
			width: 100%;
			height: 400px;
			> div h1 {
				font-size: 20vw;
				bottom: -2.5vw;
			}
		}
		&:nth-of-type(2) {
			width: 66.6666%;
		}
		&:nth-of-type(3) {
			width: 33.3333%;
		}
		&:nth-of-type(4) {
			display: none;
		}
		&:nth-of-type(5) {
			width: 33.3333%;
		}
		&:nth-of-type(6) {
			width: 66.6666%;
		}
		&:nth-of-type(7) {
			display: none;
		}
		&:nth-of-type(8) {
			width: 33.3333%;
		}
		&:nth-of-type(9) {
			width: 33.3333%;
		}
		&:nth-of-type(10) {
			display: none;
		}
		&:nth-of-type(11) {
			width: 33.3333%;
		}
		&:nth-of-type(12) {
			display: none;
		}
	}
	@media screen and (max-width: ${({ theme }) => theme.mo_b}) {
		&:nth-of-type(2) {
			width: 100%;
		}
		&:nth-of-type(3) {
			display: none;
		}
		&:nth-of-type(5) {
			width: 50%;
		}
		&:nth-of-type(6) {
			width: 50%;
		}
		&:nth-of-type(8) {
			width: 50%;
		}
		&:nth-of-type(9) {
			width: 50%;
		}
		&:nth-of-type(11) {
			width: 50%;
		}
		&:nth-of-type(12) {
			width: 50%;
			display: block;
		}
	}
	@media screen and (max-width: ${({ theme }) => theme.mo_m}) {
		&:nth-of-type(1) {
			height: 300px;
		}
	}
	@media screen and (max-width: ${({ theme }) => theme.mo_s}) {
		display: none;
		&:nth-of-type(1) {
			display: block;
			position: fixed;
			width: 100%;
			height: 100%;

			> div h1 {
				font-size: 24vw;
			}
		}
		&:nth-of-type(12) {
			display: none;
		}
	}
`;

function Box({ children, ...props }) {
	return <BoxWrap {...props}>{children}</BoxWrap>;
}

export default Box;

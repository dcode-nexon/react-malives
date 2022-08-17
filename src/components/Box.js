import styled, { css } from 'styled-components';

const BoxWrap = styled.article`
	float: left;
	background-color: ${(props) => props.bg || 'gray'};
	width: 20%;
	height: 260px;

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
		}
	}
`;

function Box({ children, ...props }) {
	return <BoxWrap {...props}>{children}</BoxWrap>;
}

export default Box;

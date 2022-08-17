import styled, { css } from 'styled-components';

const BoxWrap = styled.article`
	float: left;
	background-color: ${(props) => props.bg || 'gray'};
	width: 20%;
	height: 260px;

	${(props) =>
		props.type === 'A' &&
		css`
			width: 60%;
			height: 520px;
		`}

	${(props) =>
		props.type === 'B' &&
		css`
			width: 40%;
			height: 260px;
		`}
`;

function Box({ children, ...props }) {
	return <BoxWrap {...props}>{children}</BoxWrap>;
}

export default Box;

import styled from 'styled-components';

const BoxWrap = styled.article`
	float: left;
	height: ${(props) => props.ht || '260px'};
	width: ${(props) => props.wid || '20%'};
	background-color: ${(props) => props.bg || 'gray'};
`;

function Box({ children, wid, ht, bg }) {
	return (
		<BoxWrap wid={wid} ht={ht} bg={bg}>
			{children}
		</BoxWrap>
	);
}

export default Box;

import styled from 'styled-components';

const HeaderWrap = styled.header`
	position: fixed;
	width: 15%;
	height: 100%;
	background: #fff;
	top: 0;
	left: 0;
`;

function Header() {
	return <HeaderWrap></HeaderWrap>;
}

export default Header;

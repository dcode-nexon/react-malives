import styled, { ThemeProvider } from 'styled-components';
import size from '../DeviceSize';
import Box from './Box';

const SectionWrap = styled.section`
	width: 85%;
	position: relative;
	margin-left: 15%;

	@media screen and (max-width: ${({ theme }) => theme.web_b}) {
		width: 100%;
		margin-left: 0px;
	}
`;

function Section() {
	return (
		<ThemeProvider theme={size}>
			<SectionWrap>
				<Box bg={'#ddd'} type={'A'}></Box>
				<Box bg={'#ccc'} type={'B'}></Box>
				<Box bg={'#bbb'}></Box>
				<Box bg={'#aaa'}></Box>
				<Box bg={'#999'}></Box>
				<Box bg={'#888'} type={'B'}></Box>
				<Box bg={'#777'}></Box>
				<Box bg={'#666'}></Box>
				<Box bg={'#555'} type={'B'}></Box>
				<Box bg={'#444'}></Box>
				<Box bg={'#333'}></Box>
				<Box bg={'#222'}></Box>
			</SectionWrap>
		</ThemeProvider>
	);
}

export default Section;

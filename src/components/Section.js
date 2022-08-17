import styled from 'styled-components';
import Box from './Box';

const SectionWrap = styled.section`
	width: 85%;
	position: relative;
	margin-left: 15%;
`;

function Section() {
	return (
		<SectionWrap>
			<Box></Box>
			<Box></Box>
			<Box></Box>
			<Box></Box>
			<Box></Box>
			<Box></Box>
			<Box></Box>
			<Box></Box>
			<Box></Box>
			<Box></Box>
			<Box></Box>
			<Box></Box>
		</SectionWrap>
	);
}

export default Section;

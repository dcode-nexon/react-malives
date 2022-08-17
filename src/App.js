import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';

import Header from './components/Header';
import Nav from './components/Nav';
import Section from './components/Section';

const Wrapper = styled.main`
	@import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');
`;

function App() {
	return (
		<>
			<GlobalStyle />
			<Wrapper>
				<Header />
				<Nav />
				<Section />
			</Wrapper>
		</>
	);
}

export default App;

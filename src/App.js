import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';

import Header from './components/Header';
import Nav from './components/Nav';
import Section from './components/Section';
import { deviceSize } from './theme';

function App() {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={deviceSize}>
				<Header />
				<Nav />
				<Section />
			</ThemeProvider>
		</>
	);
}

export default App;

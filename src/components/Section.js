import styled, { ThemeProvider, css } from 'styled-components';
import size from '../DeviceSize';
import Box from './Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faRotate } from '@fortawesome/free-solid-svg-icons';

const path = process.env.PUBLIC_URL;

const bgs = [
	path + '/img/pic1.jpg',
	path + '/img/pic2.jpg',
	path + '/img/pic3.jpg',
	path + '/img/pic4.jpg',
	path + '/img/pic5.jpg',
	path + '/img/pic6.jpg',
	path + '/img/pic7.jpg',
];

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
				<Box type={'bg'} bg={bgs[0]}>
					<div>
						<span>Maldives</span>
					</div>
				</Box>
				<Box type={'txt'}>
					<div>
						<FontAwesomeIcon icon={faArrowRight} />
						<p>
							<strong>A Whole New World</strong>
							<em>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam maiores laborum
								numquam cum similique perspiciatis quasi repellat odio dolores enim?
							</em>
						</p>
					</div>
				</Box>
				<Box type={'txt'} bg={'#bff7fa'}>
					<div>
						<FontAwesomeIcon icon={faRotate} />
						<p>
							<strong>Reservation</strong>
						</p>
					</div>
				</Box>
				<Box type={'bg'} bg={bgs[1]}>
					<div>
						<span>Suite</span>
					</div>
				</Box>
				<Box type={'bg'} bg={bgs[2]}>
					<div className='bg bg3'>
						<span>Surf</span>
					</div>
				</Box>
				<Box type={'txt'}>
					<div>
						<FontAwesomeIcon icon={faArrowRight} />
						<p>
							<strong>A Dazzling Place</strong>
							<em>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum assumenda veritatis
								ipsa perferendis totam? Animi.
							</em>
						</p>
					</div>
				</Box>
				<Box type={'bg'} bg={bgs[3]}>
					<div>
						<span>Sauna</span>
					</div>
				</Box>
				<Box type={'txt'}>
					<div>
						<FontAwesomeIcon icon={faArrowRight} />
						<strong>Hot Spop</strong>
						<br />
						<em>
							a best place to have a vacation
							<br /> Tell me when you
						</em>
					</div>
				</Box>
				<Box type={'bg'} bg={bgs[4]}>
					<div>
						<span>Diner</span>
					</div>
				</Box>
				<Box type={'bg'} bg={bgs[5]}>
					<div>
						<span>Spa</span>
					</div>
				</Box>
				<Box type={'txt'} bg={'#e3f1fb'}>
					<div>
						<FontAwesomeIcon icon={faArrowRight} />
						<p>
							<strong>Open Space</strong>
							<br />
							<em>I can show you the world</em>
						</p>
					</div>
				</Box>
				<Box type={'bg'} bg={bgs[6]}>
					<div>
						<span>Tour</span>
					</div>
				</Box>
			</SectionWrap>
		</ThemeProvider>
	);
}

export default Section;

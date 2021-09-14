import { useEffect } from 'react';
import styled from 'styled-components';
import { mediaQueries } from '../styles/mediaQueries';
import Aos from 'aos';
import 'aos/dist/aos.css';

const IntroWrapper = styled.div`
	background-color: var(--secondaryColor);
	border: 1px solid var(--borderColor);
	border-radius: 5px 5px 5px 5px;

	box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
	-webkit-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);

	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 3em 30em;
	grid-template-areas:
		'nav-wrapper nav-wrapper'
		'left-column right-column';
	margin-top: 25px;
	margin-bottom: 25px;

	${mediaQueries('desktop1')`
		grid-template-columns: 1fr;
		grid-template-areas:
			'nav-wrapper'
			'left-column'
			'right-column';
	`};
`;

const NavWrapper = styled.div`
	grid-area: nav-wrapper;
	border-bottom: 1px solid var(--borderColor);
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: var(--lightMainColor);
	border-radius: 5px 5px 0 0;
`;

const Navigation = styled.ul`
	margin: 0;
	padding: 10px;

	li {
		display: inline-block;
		margin-right: 5px;
		margin-left: 5px;
	}

	li:hover {
		transform: scale(1.1);
	}

	a {
		color: black;
	}

	${mediaQueries('mobile1')`
		font-size: 15px;
	`}

	${mediaQueries('mobile2')`
		font-size: 10px;
		font-weight: 600;
	`}
`;

const LeftColumn = styled.div`
	grid-area: left-column;
	padding-top: 100px;
	padding-bottom: 50px;
	background-color: #fff;
	border-radius: 5px;

	${mediaQueries('mobile1')`
		padding-top: 50px;
	`};
`;

const RightColumn = styled.div`
	grid-area: right-column;
	padding-top: 50px;
	padding-bottom: 50px;
	display: grid;
	align-content: center;
	background-color: #fff;
	border-radius: 5px;

	${mediaQueries('desktop1')`
		justify-content: center;
		padding-bottom: 100px;
	`};

	${mediaQueries('mobile1')`
		padding-top: 0;
	`};
`;

const DotsWrapper = styled.div`
	display: flex;
	padding: 10px;
`;

const BrowserDot = styled.div`
	height: 15px;
	width: 15px;
	border-radius: 50%;
	margin: 5px;

	box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
	-webkit-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);

	&#dot-1 {
		background-color: #fc6058;
	}
	&#dot-2 {
		background-color: #fec02f;
	}
	&#dot-3 {
		background-color: #2aca3e;
	}
`;

const ProfilePic = styled.img`
	display: block;
	margin: 0 auto;
	height: 300px;
	width: 230px;
	object-fit: fill;
	border: 1px solid var(--borderColor);
	border-radius: 5px;
`;

const PreviewShadow = styled.div`
	background-color: var(--previewShadow);
	width: 280px;
	height: 180px;
	padding-left: 30px;
	padding-top: 30px;
	border-radius: 5px;

	${mediaQueries('mobile1')`
		padding-top: 15px;
		padding-left: 15px;
	`};

	${mediaQueries('mobile2')`
		width: 180px;
		height: 180px;
		padding-left: 30px;
		padding-top: 30px;
	`};
`;

const Preview = styled.div`
	width: 280px;
	border: 1.5px solid var(--borderColor);
	background-color: var(--previewBg);
	padding: 15px;
	position: relative;

	${mediaQueries('mobile1')`
		width: 260px;
	`};

	${mediaQueries('mobile2')`
		width: 180px;

		h3 {
			font-size: 21px;
		}
	`};
`;

const Corner = styled.div`
	width: 7px;
	height: 7px;
	border: 1.5px solid var(--borderColor);
	border-radius: 50%;
	background-color: #fff;
	position: absolute;

	&#corner-tl {
		top: -5px;
		left: -5px;
	}

	&#corner-tr {
		top: -5px;
		right: -5px;
	}

	&#corner-bl {
		bottom: -5px;
		left: -5px;
	}

	&#corner-br {
		bottom: -5px;
		right: -5px;
	}
`;

const Intro = () => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

	return (
		<section className='s1'>
			<div className='main-container'>
				<IntroWrapper>
					<NavWrapper>
						<DotsWrapper>
							<BrowserDot id='dot-1'></BrowserDot>
							<BrowserDot id='dot-2'></BrowserDot>
							<BrowserDot id='dot-3'></BrowserDot>
						</DotsWrapper>

						<Navigation>
							<li>
								<a href='#about'>About</a>
							</li>
							<li>
								<a href='#portfolio'>Porfolio</a>
							</li>
							<li>
								<a href='#contact'>Contact</a>
							</li>
							<li>
								<a target='_blank' href='./assets/Javier_Zarate.pdf'>
									Resume
								</a>
							</li>
						</Navigation>

						{/* <Menu onClick={handleClick}>
							<div></div>
						</Menu> */}
					</NavWrapper>

					<LeftColumn>
						<ProfilePic src='./assets/profile.webp' alt='profile' data-aos="fade-right"/>
					</LeftColumn>

					<RightColumn data-aos="fade-left">
						<PreviewShadow>
							<Preview>
								<Corner id='corner-tl'></Corner>
								<Corner id='corner-tr'></Corner>
								<h3>My name is Javier</h3>
								<p>
									I am a full-stack software engineer. I am eager to be challenged and ready to work.
									Let's build something together! Feel free to <a href='#contact'>reach out</a>.
								</p>
								<p></p>
								<Corner id='corner-bl'></Corner>
								<Corner id='corner-br'></Corner>
							</Preview>
						</PreviewShadow>
					</RightColumn>
				</IntroWrapper>
			</div>
		</section>
	);
};

export default Intro;

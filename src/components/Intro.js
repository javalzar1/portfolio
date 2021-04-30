import styled from 'styled-components';
import { mediaQueries } from '../styles/mediaQueries';

const IntroWrapper = styled.div`
	background-color: var(--secondaryColor);
	border: 1px solid var(--borderColor);
	border-radius: 5px 5px 0 0;

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

const Menu = styled.div`
	transform: translate(-20%, -5%);
	width: 40px;
	padding-top: 5px;
	padding-right: 5px;

	&:before,
	&:after,
	div {
		background: var(--secondaryText);
		content: '';
		display: block;
		height: 6px;
		border-radius: 3px;
		margin: 5px 0;
		transition: 0.5s;
	}

	&:hover:before {
		transform: translateY(11px) rotate(135deg);
	}

	&:hover:after {
		transform: translateY(-11px) rotate(-135deg);
	}

	&:hover div {
		transform: scale(0);
	}
`;

const ProfilePic = styled.img`
	display: block;
	margin: 0 auto;
	height: 300px;
	width: 230px;
	object-fit: fill;
	border: 2px solid var(--borderColor);
`;

const PreviewShadow = styled.div`
	background-color: var(--previewShadow);
	width: 280px;
	height: 180px;
	padding-left: 30px;
	padding-top: 30px;

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

						{/* <Menu>
							<div></div>
						</Menu> */}
					</NavWrapper>

					<LeftColumn>
						<ProfilePic src='./assets/profile.jpg' alt='profile' />
					</LeftColumn>

					<RightColumn>
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

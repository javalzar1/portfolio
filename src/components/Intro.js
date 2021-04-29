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
`;

const LeftColumn = styled.div`
	grid-area: left-column;
	padding-top: 100px;
	padding-bottom: 50px;
	background-color: #fff;
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
`;

const Intro = () => {
	return (
		<section className='s1'>
			<div className='main-container'>
				<IntroWrapper>
					<NavWrapper>
						<div className='dots-wrapper'>
							<div id='dot-1' className='browser-dot'></div>
							<div id='dot-2' className='browser-dot'></div>
							<div id='dot-3' className='browser-dot'></div>
						</div>

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
						{/* <div class='center'>
							<div></div>
						</div> */}
					</NavWrapper>

					<LeftColumn>
						<img id='profile-pic' src='./assets/profile.jpg' alt='profile' />
					</LeftColumn>

					<RightColumn>
						<div id='preview-shadow'>
							<div className='preview'>
								<div id='corner-tl' className='corner'></div>
								<div id='corner-tr' className='corner'></div>
								<h3>My name is Javier</h3>
								<p>
									I am a full-stack software engineer. I am eager to be challenged and ready to work.
									Let's build something together! Feel free to <a href='#contact'>reach out</a>.
								</p>
								<p></p>
								<div id='corner-bl' className='corner'></div>
								<div id='corner-br' className='corner'></div>
							</div>
						</div>
					</RightColumn>
				</IntroWrapper>
			</div>
		</section>
	);
};

export default Intro;

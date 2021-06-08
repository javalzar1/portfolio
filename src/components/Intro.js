import styled from 'styled-components';
import { mediaQueries } from '../styles/mediaQueries';

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

// const Video = styled.video`
// 	width: 100%;
// 	height: auto;
// 	opacity: 0.95;
// `;

// const Header = styled.header`
// 	position: absolute;
// 	bottom: 3em;
// 	left: 1rem;
// 	font-size: 2rem;
// 	/* text-transform: uppercase; */
// 	/* mix-blend-mode: overlay; */
// 	line-height: 1;
// `;

const Section = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;

	video {
		width: 100%;
		height: 100%;
		positon: absolute;
		top: 0;
		left: 0;
	}

	h1 {
		text-align: center;
		font-size: 6vw;
		position: absolute;
		color: #fff;

	}
	p{
		font-size: 1.5vw;
		text-align: center;
		position: absolute;
		color: #fff;
		padding-top: 400px;
	}
`;

const Intro = () => {
	return (
		<Section>
			<h1>Hello, my name is Javier.</h1>
			<p>
				{' '}
				I am a full-stack software engineer. I am eager to be challenged and ready to work. Let's build
				something together!
			</p>

			<video autoPlay loop muted poster='./assets/cw_poster.jpg'>
				<source src='assets/cyberworld.mp4' type='video/mp4' />
			</video>
		</Section>
	);
};

export default Intro;

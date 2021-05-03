import styled from 'styled-components';
import { mediaQueries } from '../styles/mediaQueries';

const AboutWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
	padding: 0px 50px 40px 50px;
	gap: 100px;

	h4 {
		text-align: center;
	}

	p {
		font-size: 24px;
	}

	${mediaQueries('desktop1')`
		grid-gap: 40px;
	`};

	${mediaQueries('desktop3')`
		grid-gap: 70px;
	`};

	${mediaQueries('mobile1')`
		padding: 10px;
		padding-bottom: 25px;
		grid-gap: 1em;
	`};

	${mediaQueries('mobile1')`
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	`};
`;

const About = () => {
	return (
		<section className='s2'>
			<div className='main-container'>
				<AboutWrapper>
					<div id='about'>
						<h4>More About Me</h4>

						<p>
							I was almost a physicist. Bill Nye the science guy is to blame. Starting out on my degree I
							took an intro to programming course and, forgive me Bill but I had to switch up! I SPRINTED
							to the office to switch majors. I love how you can make just about anything out of code.
							Programming is like a puzzle and the answer is there, you just have to figure it out.
						</p>

						<p>
							Fast forward a B.S. in Computer Science later, a recent Hack Reactor Grad, a degree was not
							enough I wanted to learn more! Next thing I know I am making a career out of this coding
							thing.
						</p>
					</div>
				</AboutWrapper>
			</div>
		</section>
	);
};

export default About;

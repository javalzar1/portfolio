const About = () => {
	return (
		<section className='s2'>
			<div className='main-container'>
				<div className='about-wrapper'>
					<div id='about' className='about-me'>
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

					<div className='skills'>
						<h4>TOP EXPERTISE</h4>

						<p>
							Fullstack developer with a focus on React.js and Node.{' '}
							<a target='_blank' href='./assets/Javier_Zarate.pdf'>
								Download Resume
							</a>
						</p>

						<div id='skills'>
							<ul>
								<li>JavaScript</li>
								<li>HTML/CSS</li>
								<li>Express</li>
								<li>React</li>
								<li>Node</li>
								<li>MongoDB</li>
							</ul>
							<ul>
								<li>C++</li>
								<li>Python</li>
								<li>HTML/CSS</li>
								<li>AWS</li>
								<li>PostgreSQL</li>
								<li>MySQL</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;

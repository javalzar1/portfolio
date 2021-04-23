const About = () => {
	return (
		<section className='s2'>
			<div className='main-container'>
				<div className='about-wrapper'>
					<div id='about' className='about-me'>
						<h4>More About Me</h4>

						<p>
							Do you remember MySpace? Way back when you could customize your page? Well I do and I
							remeber tinkering with the themes and the laytouts and in a way that was the first time I
							touched code!{' '}
						</p>

						<p>
							Fast forward a B.S. in Computer Science later, a recent Hack Reactor Grad, I am making a
							career out of this 'coding thing'.
						</p>
						<hr />

						<h4>TOP EXPERTISE</h4>

						<p>
							Fullstack developer with a focus on React and Node.{' '}
							<a target='_blank' href='./assets/Javier_Zarate.pdf'>
								Download Resume
							</a>
						</p>

						<div id='skills'>
							<ul>
								<li>JavaScript</li>
								<li>Express</li>
								<li>React</li>
								<li>Node</li>
								<li>MongoDB</li>
								<li>C++</li>
							</ul>
							<ul>
								<li>Python</li>
								<li>HTML/CSS</li>
								<li>AWS</li>
								<li>PostgreSQL</li>
								<li>MySQL</li>
							</ul>
						</div>
					</div>

					<div className='social-links'>
						<img id='social-image' src='./assets/twitter.png' alt='twitter' />
						<h3>Find me on Twitter! </h3>
						<a target='_blank' rel='noreferrer' href='https://twitter.com/JavTheDeveloper'>
							Twitter: @JavTheDeveloper
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;

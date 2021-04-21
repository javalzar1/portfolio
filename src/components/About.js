const About = () => {
	return (
		<section className='s2'>
			<div className='main-container'>
				<div className='about-wrapper'>
					<div className='about-me'>
						<h4>More About Me</h4>

						<p>
							Aliquip dolor deserunt aliqua excepteur incididunt fugiat amet sunt veniam incididunt fugiat
							consectetur voluptate.
						</p>

						<p>
							Amet anim tempor elit consequat fugiat minim ex incididunt. Ullamco in pariatur qui dolor
							labore esse sunt ad ipsum nostrud ex eiusmod aliqua.
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
						<a target='_blank' href='#'>
							Twitter: @JavTheDeveloper
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;

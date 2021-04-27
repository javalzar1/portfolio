import '../styles/App.css';

const Intro = () => {
	return (
		<section className='s1'>
			<div className='main-container'>
				<div className='intro-wrapper'>
					<div className='nav-wrapper'>
						<div className='dots-wrapper'>
							<div id='dot-1' className='browser-dot'></div>
							<div id='dot-2' className='browser-dot'></div>
							<div id='dot-3' className='browser-dot'></div>
						</div>

						<ul id='navigation'>
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
						</ul>
					</div>

					<div className='left-column'>
						<img id='profile-pic' src='./assets/profile.jpg' alt='profile' />
					</div>

					<div className='right-column'>
						<div id='preview-shadow'>
							<div className='preview'>
								<div id='corner-tl' className='corner'></div>
								<div id='corner-tr' className='corner'></div>
								<h3>My name is Javier</h3>
								<p>
									I am a full-stack software engineer. I am eager to be challenged and ready to work!
									Let's build something together! Feel free to <a href='#contact'>reach out</a>.
								</p>
								<p></p>
								<div id='corner-bl' className='corner'></div>
								<div id='corner-br' className='corner'></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Intro;

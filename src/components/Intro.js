import '../styles/App.css';

const Intro = () => {
	return (
		<section className='s1'>
			<div className='main-container'>
				<div className='greeting-wrapper'>
					<h1>Hi, I'm Javier Zarate</h1>
				</div>

				<div className='intro-wrapper'>
					<div className='nav-wrapper'>
						<div className='dots-wrapper'>
							<div id='dot-1' className='browser-dot'></div>
							<div id='dot-2' className='browser-dot'></div>
							<div id='dot-3' className='browser-dot'></div>
						</div>

						<ul id='navigation'>
							<li>
								<a href='#'>About</a>
							</li>
							<li>
								<a href='#'>Porfolio</a>
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
								<h3>Software Engineer</h3>
								<p>A master is always a student. Software Engineer learning something new every day!</p>
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

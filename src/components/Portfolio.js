const Portfolio = () => {
	return (
		<section id='portfolio' className='s1'>
			<div className='main-container'>
				<h3 style={{ textAlign: 'center' }}>Check out my work</h3>

				<div className='post-wrapper'>
					<div className='post'>
						<img className='thumbnail' alt='scarebnb' src='./assets/scarebnb.png' />
						<div className='post-preview'>
							<h6 className='post-title'>Scarebnb</h6>
							<p className='post-intro'>Online vacation rental marketplace with a spooky twist.</p>
							<form action='https://github.com/hrr50-airbnb-clone/javier-air-bnb-clone' target='_blank'>
								<input className='button' type='submit' value='Code' />
							</form>
						</div>
					</div>

					<div className='post'>
						<img className='thumbnail' alt='JTWENL' src='./assets/JTWENL.png' />
						<div className='post-preview'>
							<h6 className='post-title'> JTWENL</h6>
							<p className='post-intro'>
								Homegoods Marketplace for purchasing home furniture, decor and outdoor goods.
							</p>
							<form
								action='https://github.com/the-expressionists/Javier-Main-Description'
								target='_blank'
							>
								<input className='button' type='submit' value='Code' />
							</form>
						</div>
					</div>

					<div className='post'>
						<img className='thumbnail' src='./assets/profile.jpg' alt='profile' />
						<div className='post-preview'>
							<h6 className='post-title'> Post Title</h6>
							<p className='post-intro'>This is a sentence.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;

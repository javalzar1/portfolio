const Portfolio = () => {
	return (
		<section className='s1'>
			<div className='main-container'>
				<h3 style={{ 'text-align': 'center' }}>Check out my work</h3>

				<div className='post-wrapper'>
					<div className='post'>
						<img className='thumbnail' alt='scarebnb' src='./assets/scarebnb.png' />
						<div className='post-preview'>
							<h6 className='post-title'>Scarebnb</h6>
							<p className='post-intro'>Online vacation rental marketplace with a spooky twist.</p>
						</div>
					</div>

					<div className='post'>
						<img className='thumbnail' alt='JTWENL' src='./assets/JTWENL.png' />
						<div className='post-preview'>
							<h6 className='post-title'> JTWENL</h6>
							<p className='post-intro'>
								Homegoods Marketplace for purchasing home furniture, decor and outdoor goods.
							</p>
						</div>
					</div>

					<div className='post'>
						<img className='thumbnail' src='./assets/profile.jpg' />
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

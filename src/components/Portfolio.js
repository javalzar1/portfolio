const Portfolio = () => {
	return (
		<section id='portfolio' className='s1'>
			<div className='main-container'>
				<h3 style={{ textAlign: 'center' }}>Check out my work</h3>

				<div className='post-wrapper'>
					<div className='post'>
						<div className='post-preview'>
							<h4 className='post-title'>Scarebnb</h4>
							<p className='post-intro'>
								<b>Made with:</b> JavaScript, React.js, Express, MySQL, Node.js, HTML, CSS, AWS
							</p>
							<p className='post-content'>
								Scarebnb is an online vacation rental marketplace with a mysterious twist. A full-stack
								app for those who want to book a spooky fun get away.{' '}
							</p>
							<form action='https://github.com/scarebnb/scarebnb-reviews' target='_blank'>
								<input className='button' type='submit' value='Code' />
							</form>
						</div>
						<div className='thumbnail'>
							<img alt='scarebnb' src='./assets/scarebnb.png' />
						</div>
					</div>

					<div className='post'>
						<div className='post-preview'>
							<h4 className='post-title'> JTWENL</h4>
							<p className='post-intro'>
								<b>Made with:</b> JavaScript, React.js, Express, PostgreSQL, Node.js, HTML, CSS, AWS
							</p>
							<p className='post-content'>
								JTWENL is a homegoods Marketplace for purchasing home furniture, decor and outdoor
								goods. A full-stack app scaled to handle millions of products and large amounts of
								traffic.
							</p>
							<form
								action='https://github.com/the-expressionists/Javier-Main-Description'
								target='_blank'
							>
								<input className='button' type='submit' value='Code' />
							</form>
						</div>
						<div className='thumbnail'>
							<img alt='JTWENL' src='./assets/JTWENL.png' />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;

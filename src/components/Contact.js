const Contact = () => {
	return (
		<section id='contact' className='s2'>
			<div className='main-container'>
				<h3 style={{ textAlign: 'center' }}>Contact</h3>
				<div className='contact-wrapper'>
					<a className='contact-item email' href='mailto: javierzarate0614@gmail.com'>
						<h6>Email</h6>
						<img src='./assets/email.svg' alt='email' />
					</a>

					<a
						className='contact-item linkedin'
						target='_blank'
						rel='noreferrer'
						href='https://www.linkedin.com/in/javierzarate17/'
					>
						<h6>LinkedIn</h6>

						<img src='./assets/linkedin.svg' alt='linkedIn' />
					</a>

					<a
						className='contact-item github'
						target='_blank'
						rel='noreferrer'
						href='https://github.com/javier-zarate'
					>
						<h6>Github</h6>
						<img src='./assets/github.svg' alt='github' />
					</a>

					<a
						className='contact-item twitter'
						target='_blank'
						rel='noreferrer'
						href='https://twitter.com/JavTheDeveloper'
					>
						<h6>Twitter</h6>
						<img src='./assets/twitter.svg' alt='twitter' />
					</a>
				</div>
				<footer> &copy; 2021 Javier Zarate</footer>
			</div>
		</section>
	);
};

export default Contact;

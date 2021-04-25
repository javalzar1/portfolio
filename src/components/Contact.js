const Contact = () => {
	return (
		<section id='contact' className='s2'>
			<div className='main-container'>
				<h3 style={{ textAlign: 'center' }}>Contact</h3>
				<div className='contact-wrapper'>
					<div className='contact-item'>
						<h6>Email</h6>
						<a href='mailto: javierzarate0614@gmail.com'>
							<img src='./assets/email.svg' alt='email' />
						</a>
					</div>

					<div className='contact-item'>
						<h6>LinkedIn</h6>
						<a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/javierzarate17/'>
							<img src='./assets/linkedin.svg' alt='linkedIn' />
						</a>
					</div>

					<div className='contact-item'>
						<h6>Github</h6>
						<a target='_blank' rel='noreferrer' href='https://github.com/javier-zarate'>
							<img src='./assets/github.svg' alt='github' />
						</a>
					</div>

					<div className='contact-item'>
						<h6>Twitter</h6>
						<a target='_blank' rel='noreferrer' href='https://twitter.com/JavTheDeveloper'>
							<img src='./assets/twitter.svg' alt='twitter' />
						</a>
					</div>
				</div>
				<footer> &copy; 2021 Javier Zarate</footer>
			</div>
		</section>
	);
};

export default Contact;

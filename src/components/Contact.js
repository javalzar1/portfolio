const Contact = () => {
	return (
		<section id='contact' className='s2'>
			<div className='main-container'>
				<h3 style={{ 'text-align': 'center' }}>Get in Touch</h3>

				<form id='contact-form'>
					<label>Name</label>
					<input className='input-field' type='text' name='name' />

					<label>Subject</label>
					<input className='input-field' type='text' name='subject' />

					<label>Email</label>
					<input className='input-field' type='text' name='message' />

					<label>Message</label>
					<textarea className='input-field' name='message' />

					<input id='submit-btn' type='submit' value='Send' />
				</form>
			</div>
		</section>
	);
};

export default Contact;

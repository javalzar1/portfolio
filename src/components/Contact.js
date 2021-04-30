import styled from 'styled-components';
import { mediaQueries } from '../styles/mediaQueries';

const ContactWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: 20px 1fr 1fr;
	grid-template-areas:
		'. . . .'
		'. email linkedin .'
		'. github twitter .'
		'. . . .';
	grid-gap: 3em;

	img {
		height: 100px;
		width: 100px;
	}

	${mediaQueries('desktop1')`
		grid-gap: 2em;
		padding-bottom: 2em;

		img {
			height: 80px;
			width: 80px;
		}
	`}

	${mediaQueries('mobile1')`
		grid-gap: 1.5em;

		img {
			height: 70px;
			width: 70px;
		}
	`}

	${mediaQueries('mobile2')`
		grid-gap: 1em;

		img {
			height: 50px;
			width: 50px;
		}
	`}
`;

const Email = styled.div`
	grid-area: email;
`;

const LinkedIn = styled.div`
	grid-area: linkedin;
`;

const Github = styled.div`
	grid-area: github;
`;

const Twitter = styled.div`
	grid-area: twitter;
`;

const ContactItem = styled.a`
	display: grid;
	justify-items: center;
	align-items: center;

	border: 1px solid var(--borderColor);
	box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
	-webkit-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);

	width: 300px;
	max-width: 300px;
	padding-bottom: 40px;
	background-color: var(--lightMainColor);

	h6 {
		text-align: center;
	}

	&:hover {
		transition: 0.1s ease-in;
		transform: scale(1.05);
	}

	${mediaQueries('desktop1')`
		width: 180px;
		max-width: 180px;
	`}

	${mediaQueries('mobile1')`
		width: 130px;
		max-width: 130px;
		padding: 0 0px 30px 0px;
	`}

	${mediaQueries('mobile2')`
		width: 120px;
		max-width: 120px;
		padding: 0 0px 30px 0px;
	`}
`;

const Footer = styled.footer`
	text-align: center;
	padding-bottom: 10px;
`;
const Contact = () => {
	return (
		<section id='contact' className='s2'>
			<div className='main-container'>
				<h3 style={{ textAlign: 'center' }}>Contact</h3>
				<ContactWrapper>
					<Email>
						<ContactItem href='mailto: javierzarate0614@gmail.com'>
							<h6>Email</h6>
							<img src='./assets/email.svg' alt='email' />
						</ContactItem>
					</Email>

					<LinkedIn>
						<ContactItem
							target='_blank'
							rel='noreferrer'
							href='https://www.linkedin.com/in/javierzarate17/'
						>
							<h6>LinkedIn</h6>
							<img src='./assets/linkedin.svg' alt='linkedIn' />
						</ContactItem>
					</LinkedIn>

					<Github>
						<ContactItem target='_blank' rel='noreferrer' href='https://github.com/javier-zarate'>
							<h6>Github</h6>
							<img src='./assets/github.svg' alt='github' />
						</ContactItem>
					</Github>

					<Twitter>
						<ContactItem target='_blank' rel='noreferrer' href='https://twitter.com/JavTheDeveloper'>
							<h6>Twitter</h6>
							<img src='./assets/twitter.svg' alt='twitter' />
						</ContactItem>
					</Twitter>
				</ContactWrapper>
				<Footer> &copy; 2021 Javier Zarate</Footer>
			</div>
		</section>
	);
};

export default Contact;

import { useEffect } from 'react';
import styled from 'styled-components';
import { mediaQueries } from '../styles/mediaQueries';
import Aos from 'aos';
import 'aos/dist/aos.css';

const PostWrapper = styled.div`
	display: grid;
	grid-template-rows: repeat(auto-fit, 320px);
	gap: 50px;
	justify-content: center;
	padding-bottom: 50px;

	${mediaQueries('desktop1')`
		grid-template-rows: auto;
	`}

	${mediaQueries('mobile1')`
		padding: 10px;
		padding-bottom: 25px;
	`}

	${mediaQueries('mobile2')`
		padding: 5px;
		padding-bottom: 25px;
	`}
`;

const Post = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto;
	grid-template-areas: 'post-preview thumbnail';
	grid-gap: 1em;

	background-color: #fff;

	border: 1px solid var(--borderColor);
	border-radius: 4px;
	box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
	-webkit-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);

	${mediaQueries('desktop1')`
		grid-template-columns: auto;
		grid-template-rows: auto;
		grid-template-areas:
			'post-preview'
			'thumbnail';
		padding-bottom: 25px;
	`}
`;

const PostPreview = styled.div`
	grid-area: post-preview;
	border-radius: 4px;
	background-color: #fff;
	padding: 25px 0px 25px 25px;
`;

const PostTitle = styled.h4`
	color: black;
	margin: 0;
	font-weight: 520;
`;

const PostIntro = styled.p`
	color: #4b5156;
	font-size: 14px;
	padding-right: 20px;
`;

const PostContent = styled.p`
	color: #4b5156;
	font-size: 20px;
	padding-left: 5px;
	padding-bottom: 15px;

	${mediaQueries('desktop1')`
		padding-right: 25px;
	`}
`;

const Button = styled.input`
	border: 1px solid var(--borderColor);
	border-radius: 5px;
	padding: 12px 25px 12px 25px;
	font: inherit;
	font-weight: 500;
	letter-spacing: 0.01em;
	color: #fff;
	background-color: #959595e6;

	&:hover {
		background-color: #6c757db8;
		box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em, rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;
		transform: translateY(1px) scale(0.95);
	}

	${mediaQueries('desktop1')`
		width: 95%;
	`}
`;

const Thumbnail = styled.div`
	grid-area: thumbnail;
	display: grid;
	justify-items: center;
	align-items: center;

	img {
		height: auto;
		width: auto;
		max-width: 400px;
		max-height: 400px;
		border: 1px solid var(--borderColor);
		border-radius: 4px;
	}

	${mediaQueries('desktop3')`
		img {
			max-width: 350px;
			max-height: 350px;
		}
	`}

	${mediaQueries('desktop2')`
		img {
			max-width: 325px;
			max-height: 325px;
		}
	`}
`;

const SiteLink = styled.div`
	img:hover {
		animation: shake 0.5s;
		animation-iteration-count: 1;
	}

	@keyframes shake {
		10%,
		90% {
			transform: translate3d(-1px, 0, 0);
		}

		20%,
		80% {
			transform: translate3d(2px, 0, 0);
		}

		30%,
		50%,
		70% {
			transform: translate3d(-4px, 0, 0);
		}

		40%,
		60% {
			transform: translate3d(4px, 0, 0);
		}
	}
`;

const Portfolio = () => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<section id='portfolio' className='s2' data-aos='fade-up'>
			<div className='main-container'>
				<h3 style={{ textAlign: 'center' }}>Check out my work</h3>

				<PostWrapper>
					<Post>
						<PostPreview>
							<PostTitle>Rooted</PostTitle>
							<PostIntro>
								<b>Made with:</b> JavaScript, React.js, Gatsby.js, HTML, CSS, Styled-Components,
								ShopifyAPI
							</PostIntro>
							<PostContent>
								Rooted is an online eCommerce store for natural health supplements. A Gatsby.js
								application built using Shopify's API to handle backend and payments. Check out the
								customers{' '}
								<a href='https://www.instagram.com/rooted_fambam/' target='_blank' rel='noreferrer'>
									content!
								</a>
							</PostContent>
							<form action='https://github.com/javier-zarate/rooted' target='_blank'>
								<Button type='submit' value='Code' />
							</form>
						</PostPreview>
						<Thumbnail>
							<SiteLink>
								<a href='https://www.rootedfamily.store/' target='_blank' rel='noreferrer'>
									<img alt='rootedfamily' src='./assets/rooted.webp' />
								</a>
							</SiteLink>
						</Thumbnail>
					</Post>

					<Post>
						<PostPreview>
							<PostTitle>Scarebnb</PostTitle>
							<PostIntro>
								<b>Made with:</b> JavaScript, React.js, Express, MySQL, Node.js, HTML, CSS, AWS
							</PostIntro>
							<PostContent>
								Scarebnb is an online vacation rental marketplace with a mysterious twist. A full-stack
								app for those who want to book a spooky fun getaway.{' '}
							</PostContent>
							<form action='https://github.com/scarebnb/scarebnb-reviews/' target='_blank'>
								<Button type='submit' value='Code' />
							</form>
						</PostPreview>
						<Thumbnail>
							<img alt='scarebnb' src='./assets/scarebnb.webp' />
						</Thumbnail>
					</Post>

					<Post>
						<PostPreview>
							<PostTitle> JTWENL</PostTitle>
							<PostIntro>
								<b>Made with:</b> JavaScript, React.js, Express, PostgreSQL, Node.js, HTML, CSS, AWS
							</PostIntro>
							<PostContent>
								JTWENL is a homegoods Marketplace for purchasing home furniture, decor and outdoor
								goods. A full-stack app scaled to handle millions of products and large amounts of
								traffic.
							</PostContent>
							<form
								action='https://github.com/the-expressionists/Javier-Main-Description'
								target='_blank'
							>
								<Button type='submit' value='Code' />
							</form>
						</PostPreview>
						<Thumbnail>
							<img alt='JTWENL' src='./assets/JTWENL.webp' />
						</Thumbnail>
					</Post>
				</PostWrapper>
			</div>
		</section>
	);
};

export default Portfolio;

import styled, { keyframes } from 'styled-components';
import { mediaQueries } from '../styles/mediaQueries';

const SkillsWrapper = styled.div`
	display: grid;
	gap: 1rem;
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	grid-auto-rows: 240px;
	padding-top: 1rem;
	padding-bottom: 1rem;
`;

const Text = styled.p`
	visibility: hidden;
	font-size: 45px;
	color: #fff;
	-webkit-text-stroke-width: 0.5px;
	-webkit-text-stroke-color: gray;
	position: relative;
`;

const FadeIn = keyframes`
  0% {opacity:0;}
  100% {opacity:1;}
	`;

const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
	height: 100%;
	width: 100%;
	border-radius: 4px;
	transition: all 500ms;
	overflow: hidden;

	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;

	&:hover {
		box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em, rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;
		transform: translateY(-3px) scale(1.1);

		${Text} {
			visibility: visible;
			animation-name: ${FadeIn};
			animation-duration: 1s;
		}
	}
`;

const CardTall = styled(Card)`
	@media screen and (min-width: 1063px) {
		grid-row: span 2 / auto;
		font-size: 2rem;
	}
`;

const CardWide = styled(Card)`
	@media screen and (min-width: 1063px) {
		grid-column: span 2 / auto;
		font-size: 2rem;
	}
`;

const Skills = () => {
	return (
		<section className='s1'>
			<div className='main-container'>
				<h3 style={{ textAlign: 'center' }}>Skills</h3>
				<SkillsWrapper>
					<CardWide
						style={{
							backgroundImage:
								"url('https://cdn.pixabay.com/photo/2019/10/03/12/12/javascript-4523100_1280.jpg')",
						}}
					></CardWide>
					<Card
						style={{
							backgroundImage:
								"url('https://images.unsplash.com/photo-1454165205744-3b78555e5572?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80')",
						}}
					>
						<Text>HTML</Text>
					</Card>
					<Card
						style={{
							backgroundImage:
								"url('https://images.unsplash.com/photo-1605859465655-84c45e14a0af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80')",
						}}
					>
						<Text>CSS</Text>
					</Card>
					<CardTall
						style={{
							backgroundImage:
								"url('https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png')",
						}}
					>
						<Text style={{ top: '50px' }}>React</Text>
					</CardTall>
					<Card
						style={{
							backgroundImage:
								"url('https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/aws-logo-blog-header.png?itok=t4o3meiH')",
						}}
					></Card>
					<Card
						style={{
							backgroundImage:
								"url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
						}}
					>
						<Text>Express</Text>
					</Card>
					<CardTall
						style={{
							backgroundImage:
								"url('https://images.unsplash.com/photo-1590640265333-3aee45101470?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=641&q=80')",
						}}
					>
						<Text style={{ top: '50px' }}>MySQL</Text>
					</CardTall>
					<CardWide
						style={{
							backgroundImage:
								"url('https://portswigger.net/cms/images/f7/39/b1ca-article-200624-nodejs-body-text.png')",
						}}
					></CardWide>
					<Card
						style={{
							backgroundImage:
								"url('https://images.unsplash.com/photo-1503286666306-61c9985f16cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2129&q=80')",
						}}
					>
						<Text style={{ fontSize: '2.5 rem', top: '50px' }}>PostgreSQL</Text>
					</Card>
					<Card
						style={{
							backgroundImage:
								"url('https://images.unsplash.com/photo-1591495746097-8a92864d5c1f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1523&q=80')",
						}}
					>
						<Text>MongoDB</Text>
					</Card>
					<Card
						style={{
							backgroundImage:
								"url('https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2089&q=80')",
						}}
					></Card>
					<Card
						style={{
							backgroundImage:
								"url('https://content.techgig.com/thumb/msid-81318224,width-860,resizemode-4/Top-C-programming-libraries-that-developers-need-to-know.jpg?45157')",
						}}
					></Card>
				</SkillsWrapper>
			</div>
		</section>
	);
};

export default Skills;

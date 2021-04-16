import '../styles/App.css';
import Intro from './Intro';

function App() {
	return (
		<div className='App'>
			<Intro />

			<section className='s2'>
				<div className='main-container'>About</div>
			</section>

			<section className='s1'>
				<div className='main-container'>Portfolio</div>
			</section>

			<section className='s2'>
				<div className='main-container'>Contact</div>
			</section>
		</div>
	);
}

export default App;

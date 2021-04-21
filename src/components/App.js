import '../styles/App.css';
import Intro from './Intro';
import About from './About';
import Portfolio from './Portfolio';

function App() {
	return (
		<div className='App'>
			<Intro />

			<About />

			<Portfolio />

			<section className='s2'>
				<div className='main-container'>Contact</div>
			</section>
		</div>
	);
}

export default App;

import '../styles/App.css';
import Intro from './Intro';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

function App() {
	return (
		<div className='App'>
			<Intro />

			<About />

			<Portfolio />

			<Contact />
		</div>
	);
}

export default App;

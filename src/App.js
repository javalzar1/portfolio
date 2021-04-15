import './App.css';

function App() {
	return (
		<div className='App'>
			<section className='s1'>
				<div className='main-container'>
					<div className='greeting-wrapper'>
						<h1>Hi, I'm Javier Zarate</h1>
					</div>

					<div className='intro-wrapper'>
						<div className='nav-wrapper'>
							<div className='dots-wrapper'>
								<div id='dot-1' className='browser-dot'></div>
								<div id='dot-2' className='browser-dot'></div>
								<div id='dot-3' className='browser-dot'></div>
							</div>

							<ul id='navigation'>
								<li>
									<a href='#'>About</a>
								</li>
								<li>
									<a href='#'>Porfolio</a>
								</li>
							</ul>
						</div>
						<div className='left-column'>left-column</div>
						<div className='right-column'>right-column</div>
					</div>
				</div>
			</section>

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

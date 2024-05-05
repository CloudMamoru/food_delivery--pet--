import { useState } from 'react';
import { Button } from './components/Button/Button';
import { Input } from './components/Input/Input';
import { Link } from 'react-router-dom';

function App() {
	const [counter, setCounter] = useState<number>(0);

	return (
		<>
			<p>{counter}</p>
			<Input placeholder='Email' />
			<Button onClick={() => setCounter(prev => prev + 1)} appearance='big'>Нажать</Button>
			<div>
				<Link to='/'>Menu</Link>
				<Link to='/cart'>Cart</Link>
			</div>
		</>
	);
}

export default App;

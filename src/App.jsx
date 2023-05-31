import { useEffect, useState } from 'react';

const App = () => {
	const [counter, setCounter] = useState(getCounterInitialValue);
	const [username, setUsername] = useState(getUsernameInitialValue);
	useEffect(() => {
		localStorage.setItem('data', JSON.stringify({ counter, username }));
	}, [counter, username]);
	return (
		<>
			<h1>{counter}</h1>
			<h2>{username}</h2>
			<input type='text' onChange={e => handleChange(setUsername, e)} />
			<button onClick={() => handleIncrement(counter, setCounter)}>+1</button>
		</>
	);
};

const handleChange = (setUsername, e) => {
	setUsername(e.target.value);
};

const handleIncrement = (counter, setCounter) => {
	setCounter(counter + 1);
};

const getCounterInitialValue = () => {
	const initialValue = JSON.parse(localStorage.getItem('data'));
	if (!initialValue) localStorage.setItem('data', JSON.stringify({}));
	return Number(initialValue.counter) || 0;
};
const getUsernameInitialValue = () => {
	const initialValue = JSON.parse(localStorage.getItem('data')) || 'username';
	if (!initialValue) localStorage.setItem('data', JSON.stringify({}));
	return initialValue.username || 'username';
};

export default App;

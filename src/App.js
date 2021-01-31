import './App.css';
import HomePage from './pages/hompage/homepage.component';
import { Route } from 'react-router-dom';

const Hats = () => {
	return <div>Hats Page</div>;
};

function App(props) {
	return (
		<div>
			<Route exact path="/" component={HomePage} />
			<Route path="/hats" component={Hats} />
		</div>
	);
}

export default App;

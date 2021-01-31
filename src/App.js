import './App.css';
import HomePage from './pages/hompage/homepage.component';
import { Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';

function App(props) {
	return (
		<div>
			<Route exact path="/" component={HomePage} />
			<Route exact path="/shop" component={ShopPage} />
		</div>
	);
}

export default App;

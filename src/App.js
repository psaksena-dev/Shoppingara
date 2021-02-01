import './App.css';
import HomePage from './pages/hompage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import SignInSignUpPage from './pages/signin/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

function App(props) {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
				<Route path="/signin" component={SignInSignUpPage} />
			</Switch>
		</div>
	);
}

export default App;

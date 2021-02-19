import React from 'react';
import './App.css';
import HomePage from './pages/hompage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import SignInSignUpPage from './pages/signin/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUsrProfileDocuemnt } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			console.log('user signed in');
			if (userAuth) {
				const userRef = await createUsrProfileDocuemnt(userAuth);

				userRef.onSnapshot((snapshot) => {
					// this.setState({
					// 	currentUser: {
					// 		id: snapshot.id,
					// 		...snapshot.data()
					// 	}
					// });
					setCurrentUser({
						id: snapshot.id,
						...snapshot.data()
					});
				});
			} else {
				setCurrentUser(userAuth);
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
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
}

const mapDispatchToProps = (dispatch) => {
	return {
		setCurrentUser: (user) => dispatch(setCurrentUser(user))
	};
};

export default connect(null, mapDispatchToProps)(App);

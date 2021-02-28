import React from 'react';
import './App.scss';
import HomePage from './pages/hompage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignInSignUpPage from './pages/signin/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUsrProfileDocuemnt } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
// import { shopCollectionsForPreview } from './redux/shop/shop.selector';

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

			// addCollectionsAndDocuments(
			// 	'collections',
			// 	collectionArray.map(({ title, items }) => ({
			// 		title,
			// 		items
			// 	}))
			// );
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
					<Route exact path="/checkout" component={CheckoutPage} />
					<Route
						exact
						path="/signin"
						render={() =>
							this.props.currentUser ? (
								<Redirect to="/" />
							) : (
								<SignInSignUpPage />
							)
						}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
	// collectionArray: shopCollectionsForPreview
});

const mapDispatchToProps = (dispatch) => {
	return {
		setCurrentUser: (user) => dispatch(setCurrentUser(user))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

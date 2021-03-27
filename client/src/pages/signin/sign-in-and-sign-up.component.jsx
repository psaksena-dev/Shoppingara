import React from 'react';
import classes from './sign-in-and-sign-up.module.scss';
import SignIn from './../../components/signin/signin.component';
import SignUp from './../../components/signup/signup.component';

const SignInSignUpPage = () => {
	return (
		<div className={classes['sign-in-and-sign-up']}>
			<SignIn />
			<SignUp />
		</div>
	);
};

export default SignInSignUpPage;

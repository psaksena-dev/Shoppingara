import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from './../forminput/forminput.component';
import CustomButton from './../custombutton/custombutton.component';
import classes from './signin.module.scss';
import {
	googleSignInStart,
	emailSignInStart
} from './../../redux/user/user.action';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
	const [userCredentials, setUserCredentials] = useState({
		email: '',
		password: ''
	});

	const { email, password } = userCredentials;

	const onSubmitHandler = async (ev) => {
		ev.preventDefault();

		emailSignInStart({
			email,
			password
		});
	};

	const onChangeHandler = (ev) => {
		const { value, name } = ev.target;
		setUserCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<div className={classes.signin}>
			<h2 className={classes.title}>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={onSubmitHandler}>
				<FormInput
					type="email"
					name="email"
					value={email}
					required
					onChange={onChangeHandler}
					label="Email"
				/>
				<FormInput
					type="password"
					name="password"
					value={password}
					required
					onChange={onChangeHandler}
					label="Password"
				/>
				<div className={classes.buttons}>
					<CustomButton type="submit">Sign In</CustomButton>
					<CustomButton
						type="button"
						isGoogleSignIn
						onClick={googleSignInStart}
					>
						Sign In With Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (emailAndPassword) =>
		dispatch(emailSignInStart(emailAndPassword))
});

export default connect(null, mapDispatchToProps)(SignIn);

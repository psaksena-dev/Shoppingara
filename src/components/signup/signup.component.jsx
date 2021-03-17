import React, { useState } from 'react';
import { connect } from 'react-redux';
import classes from './signup.module.scss';
import FormInput from '../forminput/forminput.component';
import CustomButton from '../custombutton/custombutton.component';

import { signUpStart } from './../../redux/user/user.action';

const SignUp = ({ signUpStart }) => {
	const [userCredentials, setUserCredentials] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: ''
	});

	const { displayName, email, password, confirmPassword } = userCredentials;

	const handleSubmit = async (ev) => {
		ev.preventDefault();

		if (password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}
		signUpStart({
			email,
			password,
			displayName
		});
	};

	const handleChange = (ev) => {
		const { name, value } = ev.target;
		setUserCredentials({
			...userCredentials,
			[name]: value
		});
	};

	return (
		<div className={classes['sign-up']}>
			<h2 className={classes.title}>I do not have an account</h2>
			<span>Sign up with your email and password</span>
			<form className={classes['sign-up-form']} onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="displayName"
					value={displayName}
					onChange={handleChange}
					label="Display Name"
					required
				/>

				<FormInput
					type="email"
					name="email"
					value={email}
					onChange={handleChange}
					label="Email"
					required
				/>

				<FormInput
					type="password"
					name="password"
					value={password}
					onChange={handleChange}
					label="Password"
					required
				/>

				<FormInput
					type="password"
					name="confirmPassword"
					value={confirmPassword}
					onChange={handleChange}
					label="Confirm Password"
					required
				/>

				<CustomButton type="submit">Sign Up</CustomButton>
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
});
export default connect(null, mapDispatchToProps)(SignUp);

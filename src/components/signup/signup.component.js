import React, { Component } from 'react';
import classes from './signup.module.scss';
import FormInput from './../../components/forminput/forminput.component';
import CustomButton from './../../components/custombutton/custombutton.component';

import {
	auth,
	createUsrProfileDocuemnt
} from './../../firebase/firebase.utils';

class SignUp extends Component {
	state = {
		displayName: '',
		email: '',
		password: '',
		confirmPassword: ''
	};

	handleSubmit = async (ev) => {
		ev.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;
		if (password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}
		debugger;
		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);

			await createUsrProfileDocuemnt(user, {
				displayName
			});

			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			});
		} catch (error) {
			console.log(error);
		}
	};

	handleChange = (ev) => {
		const { name, value } = ev.target;
		this.setState({
			[name]: value
		});
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className={classes['sign-up']}>
				<h2 className={classes.title}>I do not have an account</h2>
				<span>Sign up with your email and password</span>
				<form className={classes['sign-up-form']} onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						name="displayName"
						value={displayName}
						onChange={this.handleChange}
						label="Display Name"
						required
					/>

					<FormInput
						type="email"
						name="email"
						value={email}
						onChange={this.handleChange}
						label="Email"
						required
					/>

					<FormInput
						type="password"
						name="password"
						value={password}
						onChange={this.handleChange}
						label="Password"
						required
					/>

					<FormInput
						type="password"
						name="confirmPassword"
						value={confirmPassword}
						onChange={this.handleChange}
						label="Confirm Password"
						required
					/>

					<CustomButton type="submit">Sign Up</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignUp;

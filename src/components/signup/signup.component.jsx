import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './signup.module.scss';
import FormInput from '../forminput/forminput.component';
import CustomButton from '../custombutton/custombutton.component';

import { signUpStart } from './../../redux/user/user.action';

class SignUp extends Component {
	state = {
		displayName: '',
		email: '',
		password: '',
		confirmPassword: ''
	};

	handleSubmit = async (ev) => {
		const { signUpStart } = this.props;
		ev.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;
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

const mapDispatchToProps = (dispatch) => ({
	signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
});
export default connect(null, mapDispatchToProps)(SignUp);

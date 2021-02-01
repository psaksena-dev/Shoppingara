import React, { Component } from 'react';

class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};
	}

	onSubmitHandler = (ev) => {
		ev.preventDefault();
		this.setState({
			email: '',
			password: ''
		});
	};

	onChangeHandler = (ev) => {
		const { value, name } = ev.target;
		this.setState({
			[name]: value
		});
	};

	render() {
		return (
			<div>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.onSubmitHandler}>
					<input
						type="email"
						name="email"
						value={this.state.email}
						required
						onChange={this.onChangeHandler}
					/>
					<label>Email</label>
					<input
						type="password"
						name="password"
						value={this.state.password}
						required
						onChange={this.onChangeHandler}
					/>
					<label>Password</label>
					<input type="submit" value="Submit Form" />
				</form>
			</div>
		);
	}
}

export default SignIn;

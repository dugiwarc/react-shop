/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

// Locals
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";

// Actions
import { login } from "../actions/userActions";

// Main
const LoginScreen = ({ location, history }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { loading, error, userInfo } = userLogin;

	const submitHandler = (evt) => {
		evt.preventDefault();
		dispatch(login(email, password));
	};

	const redirect = location.search ? location.search.split("=")[1] : "/";

	useEffect(() => {
		if (userInfo) {
			history.push(redirect);
		}
	}, [history, userInfo, redirect]);

	return (
		<FormContainer>
			<h1>Sign in</h1>
			{error && <Message variant='danger'>{error}</Message>}
			{loading && <Loader />}
			<Form onSubmit={submitHandler}>
				<Form.Group controlId='email'>
					<Form.Label>Email Address</Form.Label>
					<Form.Control
						type='email'
						placeholder='Enter email'
						value={email}
						onChange={(evt) => setEmail(evt.target.value)}
					></Form.Control>
				</Form.Group>
				<Form.Group controlId='password'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Enter password'
						value={password}
						onChange={(evt) => setPassword(evt.target.value)}
					></Form.Control>
				</Form.Group>

				<Button type='submit' variant='primary'>
					Sign in
				</Button>
			</Form>
			<Row className='py-3'>
				<Col>
					New Customer?{" "}
					<Link to={redirect ? `/register?redirect=${redirect}` : `/register`}>
						Register
					</Link>
				</Col>
			</Row>
		</FormContainer>
	);
};

export default LoginScreen;

/** @format */

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

// Actions
import { saveShippingAddress } from "../actions/cartActions";

// Locals
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";

// Main
const ShippingScreen = ({ history }) => {
	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart);
	const { shippingAddress } = cart;

	const [address, setAddress] = useState(shippingAddress.address);
	const [city, setCity] = useState(shippingAddress.city);
	const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
	const [country, setCountry] = useState(shippingAddress.country);

	const submitHandler = (evt) => {
		evt.preventDefault();
		dispatch(saveShippingAddress({ address, city, postalCode, country }));
		history.push("/payment");
	};

	return (
		<FormContainer>
			<CheckoutSteps step1 step2 />
			<h1>Shipping</h1>
			<Form onSubmit={submitHandler}>
				<Form.Group controlId='address'>
					<Form.Label>Address</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter address'
						value={address}
						onChange={(evt) => setAddress(evt.target.value)}
						required
					></Form.Control>
				</Form.Group>
				<Form.Group controlId='city'>
					<Form.Label>City</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter city'
						value={city}
						onChange={(evt) => setCity(evt.target.value)}
						required
					></Form.Control>
				</Form.Group>
				<Form.Group controlId='postalCode'>
					<Form.Label>Postal Code</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter Postal Code'
						value={postalCode}
						onChange={(evt) => setPostalCode(evt.target.value)}
						required
					></Form.Control>
				</Form.Group>
				<Form.Group controlId='country'>
					<Form.Label>Country</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter country'
						value={country}
						onChange={(evt) => setCountry(evt.target.value)}
						required
					></Form.Control>
				</Form.Group>
				<Button type='submit' variant='primary'>
					Continue
				</Button>
			</Form>
		</FormContainer>
	);
};

export default ShippingScreen;

/** @format */

import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Screens
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import CartScreen from "./screens/CartScreen";
import ProductScreen from "./screens/ProductScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";

const App = () => {
	return (
		<Router>
			<Header />
			<main className='py-3'>
				<Container>
					<Route path='/login' component={LoginScreen} />
					<Route path='/payment' component={PaymentScreen} />
					<Route path='/shipping' component={ShippingScreen} />
					<Route path='/register' component={RegisterScreen} />
					<Route path='/profile' component={ProfileScreen} />
					<Route path='/product/:id' component={ProductScreen} />
					<Route path='/cart/:id?' component={CartScreen} />
					<Route path='/' component={HomeScreen} exact />
				</Container>
			</main>
			<Footer />
		</Router>
	);
};

export default App;

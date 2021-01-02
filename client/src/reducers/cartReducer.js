/** @format */

import {
	CART_ADD_ITEM,
	CART_REMOVE_ITEM,
	CART_SAVE_SHIPPING_ADDRESS,
	CART_SAVE_PAYMENT_METHOD,
} from "../constants/cartConstants";

export const cartReducer = (
	state = {
		cartItems: [],
		shippingAddress: {},
	},
	action
) => {
	switch (action.type) {
		case CART_ADD_ITEM:
			const payloadItem = action.payload;
			const existsItem = state.cartItems.find(
				(item) => item.product === payloadItem.product
			);
			if (existsItem) {
				return {
					...state,
					cartItems: state.cartItems.map((item) =>
						item.product === existsItem.product ? payloadItem : item
					),
				};
			} else {
				return {
					...state,
					cartItems: [...state.cartItems, payloadItem],
				};
			}

		case CART_REMOVE_ITEM:
			return {
				...state,
				cartItems: state.cartItems.filter(
					(item) => item.product !== action.payload
				),
			};
		case CART_SAVE_SHIPPING_ADDRESS:
			return {
				...state,
				shippingAddress: action.payload,
			};
		case CART_SAVE_PAYMENT_METHOD:
			return {
				...state,
				paymentMethod: action.payload,
			};
		default:
			return state;
	}
};

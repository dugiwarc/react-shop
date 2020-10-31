/** @format */

import { CART_ADD_ITEM } from "../constants/cartConstants";

export const cartReducer = (
	state = {
		cartItems: [],
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
					cartItem: state.cartItems.map((item) =>
						item.product === existsItem.product ? payloadItem : item
					),
				};
			} else {
				return {
					...state,
					cartItems: [...state.cartItems, payloadItem],
				};
			}
		default:
			return state;
	}
};

/** @format */
import {
	PRODUCT_DETAILS_FAIL,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
} from "../constants/productConstants";

const initialState = { product: { reviews: [] } };

export const productDetailsReducer = (state = initialState, action) => {
	const { payload, type } = action;
	switch (type) {
		case PRODUCT_DETAILS_REQUEST:
			return { ...state, loading: true };
		case PRODUCT_DETAILS_SUCCESS:
			return { ...state, loading: false, product: payload };
		case PRODUCT_DETAILS_FAIL:
			return { ...state, loading: false, error: payload };
		default:
			return state;
	}
};

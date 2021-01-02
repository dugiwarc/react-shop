/** @format */
import {
	USER_LOGOUT,
	USER_REGISTER_FAIL,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
	USER_UPDATE_PROFILE_FAIL,
	USER_UPDATE_PROFILE_REQUEST,
	USER_UPDATE_PROFILE_SUCCESS,
	USER_DETAILS_FAIL,
	USER_DETAILS_REQUEST,
	USER_DETAILS_SUCCESS,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAIL,
	USER_UPDATE_PROFILE_RESET,
} from "../constants/userConstants";

export const userLoginReducers = (state = {}, action) => {
	const { payload, type } = action;
	switch (type) {
		case USER_LOGIN_REQUEST:
			return { ...state, loading: true };
		case USER_LOGIN_SUCCESS:
			return { ...state, loading: false, userInfo: payload };
		case USER_LOGIN_FAIL:
			return { ...state, loading: false, error: payload };
		case USER_LOGOUT:
			return {};
		default:
			return state;
	}
};

export const userRegisterReducers = (state = {}, action) => {
	const { payload, type } = action;
	switch (type) {
		case USER_REGISTER_REQUEST:
			return { ...state, loading: true };
		case USER_REGISTER_SUCCESS:
			return { ...state, loading: false, userInfo: payload };
		case USER_REGISTER_FAIL:
			return { ...state, loading: false, error: payload };
		default:
			return state;
	}
};

export const userDetailsReducers = (state = { user: {} }, action) => {
	const { payload, type } = action;
	switch (type) {
		case USER_DETAILS_REQUEST:
			return { ...state, loading: true };
		case USER_DETAILS_SUCCESS:
			return { ...state, loading: false, user: payload };
		case USER_DETAILS_FAIL:
			return { ...state, loading: false, error: payload };
		default:
			return state;
	}
};

export const userUpdateProfileReducers = (state = { user: {} }, action) => {
	const { payload, type } = action;
	switch (type) {
		case USER_UPDATE_PROFILE_REQUEST:
			return { ...state, loading: true };
		case USER_UPDATE_PROFILE_SUCCESS:
			return { ...state, loading: false, success: true, userInfo: payload };
		case USER_UPDATE_PROFILE_FAIL:
			return { ...state, loading: false, error: payload };
		case USER_UPDATE_PROFILE_RESET:
			return {};
		default:
			return state;
	}
};

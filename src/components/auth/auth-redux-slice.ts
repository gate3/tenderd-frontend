import {Dispatch} from 'redux'
import { createSlice } from '@reduxjs/toolkit'
import {initialState, ReduxActions} from './constants';
import AuthenticationService from '../../services/auth-service';
import {LoginPayloadType} from "../types";
import LocalStorageHelper from '../../services/localstorage-helper';


const authSlice = createSlice({
    name: ReduxActions.AUTH,
    initialState,
    reducers: {
        initiateUserLogin: state => {
            state.loading = true;
        },
        userLoginSuccess: (state, {payload}) => {
            state.loading = false;
            state.hasErrors = false;
            state.responsePayload = payload;
        },
        userLoginError: (state, {payload}) => {
            state.loading = false;
            state.hasErrors = true;
            state.responsePayload = payload;
        },
        initiateUserRegister: (state) => {
            state.loading = true;
        },
        userRegisterSuccess: (state, {payload}) => {
            state.loading = false;
            state.responsePayload = payload;
        },
        userRegisterError: (state, {payload}) => {
            state.loading = false;
            state.hasErrors = true;
            state.responsePayload = payload;
        }
    }
});


export const {
    initiateUserLogin, userLoginSuccess, userLoginError,
    initiateUserRegister, userRegisterSuccess, userRegisterError
} = authSlice.actions;

export default authSlice.reducer;

export function userLogin (loginPayload:LoginPayloadType) {
    return async (dispatch:Dispatch) => {
        dispatch(initiateUserLogin());
        try{
            const loggedInUser = await AuthenticationService.loginUser(loginPayload);
            const result = loggedInUser.data;
            LocalStorageHelper.storeItem(LocalStorageHelper.localStoreKeys.userProfile, result);
            dispatch(userLoginSuccess(result))
        }catch (e) {
            dispatch(userLoginError(e.message))
        }
    }
}

export function userSignUp (signupPayload:{email: string, password: string, name:string}) {
    return async (dispatch:Dispatch) => {
        dispatch(initiateUserRegister());
        try{
            const registeredUser = await AuthenticationService.createUser(signupPayload);
            const result = registeredUser.data;
            dispatch(userRegisterSuccess(result))
        }catch (e) {
            dispatch(userRegisterError(e.message))
        }
    }
}

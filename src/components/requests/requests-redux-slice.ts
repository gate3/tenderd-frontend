import {Dispatch} from 'redux'
import { createSlice } from '@reduxjs/toolkit'
import {initialState, ReduxActions} from './constants';
import CompaniesService from "../../services/companies-service";

const requestsSlice = createSlice({
    name: ReduxActions.REQUESTS,
    initialState,
    reducers: {
        initiateFetchRequests: state => {
            state.loading = true;
        },
        fetchRequestsSuccess: (state, {payload}) => {
            state.loading = false;
            state.hasErrors = false;
            state.responsePayload = payload;
        },
        fetchRequestsError: (state, {payload}) => {
            state.loading = false;
            state.hasErrors = true;
            state.responsePayload = payload;
        },
    }
});

export const {
    initiateFetchRequests, fetchRequestsSuccess, fetchRequestsError,
} = requestsSlice.actions;

export default requestsSlice.reducer;

export function fetchCompanies (companyId:string) {
    return async (dispatch:Dispatch) => {
        dispatch(initiateFetchRequests());
        try{
            const loggedInUser = await CompaniesService.fetchAllCompanies();
            const result = loggedInUser.data;
            dispatch(fetchRequestsSuccess(result))
        }catch (e) {
            dispatch(fetchRequestsError(e.message))
        }
    }
}

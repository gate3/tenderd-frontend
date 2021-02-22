import {Dispatch} from 'redux'
import { createSlice } from '@reduxjs/toolkit'
import {initialState, ReduxActions} from './constants';
import CompaniesService from "../../services/companies-service";

const companiesSlice = createSlice({
    name: ReduxActions.COMPANIES,
    initialState,
    reducers: {
        initiateFetchCompanies: state => {
            state.loading = true;
        },
        fetchCompaniesSuccess: (state, {payload}) => {
            state.loading = false;
            state.hasErrors = false;
            state.responsePayload = payload;
        },
        fetchCompaniesError: (state, {payload}) => {
            state.loading = false;
            state.hasErrors = true;
            state.responsePayload = payload;
        },
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
    initiateFetchCompanies, fetchCompaniesSuccess, fetchCompaniesError,
    initiateFetchRequests, fetchRequestsSuccess, fetchRequestsError
} = companiesSlice.actions;

export default companiesSlice.reducer;

export function fetchCompanies () {
    return async (dispatch:Dispatch) => {
        dispatch(initiateFetchCompanies());
        try{
            const loggedInUser = await CompaniesService.fetchAllCompanies();
            const result = loggedInUser.data;
            dispatch(fetchCompaniesSuccess(result))
        }catch (e) {
            dispatch(fetchCompaniesError(e.message))
        }
    }
}

export function fetchCompanyRequests (companyId:string) {
    return async (dispatch:Dispatch) => {
        dispatch(initiateFetchRequests());
        try{
            const requests = await CompaniesService.fetchRequestsForCompany(companyId);
            const result = requests.data;
            dispatch(fetchRequestsSuccess(result))
        }catch (e) {
            dispatch(fetchRequestsError(e.message))
        }
    }
}

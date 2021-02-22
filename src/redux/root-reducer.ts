import { combineReducers } from '@reduxjs/toolkit'
import authReducer from '../components/auth/auth-redux-slice';
import companiesReducer from '../components/companies/company-redux-slice';
import requestsReducer from '../components/requests/requests-redux-slice';

export default combineReducers({
    auth: authReducer,
    company: companiesReducer,
    request: requestsReducer
});

import axios from 'axios';
import {environmentVariables} from "../config/environment-config";

const httpRequestInstance = axios.create({
    baseURL: environmentVariables.apiBaseUrl,
    timeout: 3000
});

export default httpRequestInstance;

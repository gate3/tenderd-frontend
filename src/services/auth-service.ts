import httpRequestInstance from "./http-request-helper";

const createUser = (data:Record<string, string>) => {
    const registerPath = 'auth/register';
    return httpRequestInstance.post(registerPath, data)
};

const loginUser = (data:Record<string, string>) => {
    const registerPath = 'auth/login';
    return httpRequestInstance.post(registerPath, data)
};

export default {
    createUser,
    loginUser
}

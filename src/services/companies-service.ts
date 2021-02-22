import httpRequestInstance from "./http-request-helper";

const basePath = 'companies';

const fetchAllCompanies = () => httpRequestInstance.get(basePath);

const fetchRequestsForCompany = (companyId:string) => {
    const requestsPath = `${basePath}/${companyId}/requests`
    return httpRequestInstance.get(requestsPath)
};

export default {
    fetchAllCompanies,
    fetchRequestsForCompany
};

const storeItem = (key:string, data:Record<string, any>) => {
    localStorage.setItem(key, JSON.stringify(data))
};

const getItem = (key:string):string|null => {
    return localStorage.getItem(key)
};

const localStoreKeys = {
    userProfile: '_userLocalData'
}

export default {
    storeItem,
    getItem,
    localStoreKeys
}

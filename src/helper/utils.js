import LocalStorageService from './localStorageService';
const localStorageService = LocalStorageService.getService();

// check if user logged in
export const isLogin = () => {
    if (localStorageService.getToken()) {
        return true;
    }

    return false;
};

// set message for fields
export const setMessage = (message, name) => {
    if (message && name) {
        return message.replace('{name}', name);
    }
    return '';
};

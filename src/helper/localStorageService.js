/** 
  Author: Lokesh Arora - er.lokesharora@gmail.com
  Purpose: Local storage API services
  Date: Sept 2020
**/

const LocalStorageService = (function () {
    let _service;
    const _getService = function () {
        if (!_service) {
            _service = this;
            return _service;
        }
        return _service;
    };
    const _setLoginInfo = (tokenObj) => {
        localStorage.setItem('token', tokenObj.token);
    };
    const _getToken = () => {
        return localStorage.getItem('token');
    };
    const _clearToken = () => {
        localStorage.clear();
    };
    return {
        getService: _getService,
        setLoginInfo: _setLoginInfo,
        getToken: _getToken,
        clearToken: _clearToken,
    };
})();
export default LocalStorageService;

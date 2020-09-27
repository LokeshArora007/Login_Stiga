/*
 * Actions: Auth
 */
import client from '../../helper/axios';

/*
 * Method: Login
 * @params: Pass form data to api
 * Desc: Do login with this api
 */
const Login = (params) => (dispatch) => {
    return client
        .post(`/login`, params)
        .then((response) => {
            // dispatch action
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
};

export default { Login };

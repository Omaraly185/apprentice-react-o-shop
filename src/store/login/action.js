import actiontypes from "./actionTypes";
import { userService } from '../../services/userService';
import {history} from '../../utils/history';

export const loginAction = {
    login,
    logout,
};
function login (username, password) {
    return (dispatch) => {
        dispatch({type: actiontypes.LOGIN_REQUEST, user: {username }});

        userService.login(username, password).then(
            (user) => {
                dispatch({type: actiontypes.LOGIN_SUCCESS, user});
                history.push('/');
            },
            (error)=> {
                console.log(error);
                dispatch ({type: actiontypes.LOGIN_FAILURE, error});
            }
        );
    };
}

function logout() {
    userService.logout();
    return {type: actiontypes.LOGOUT}
}
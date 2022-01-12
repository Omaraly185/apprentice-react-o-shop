import actionType from './actionType';
import { userService } from '../../service/userService';
import { history } from '../../utils/history';

export const registerActions = {
  register,
};

function register(user) {
  return (dispatch) => {
    dispatch({type: actionType.REGISTER_REQUEST,user});


    userService.register(user).then(
      (user) => {
        dispatch({type: actionType.REGISTER_SUCCESS,user});
        history.push('/login');
      },
      (error) => {
        console.log(error);
        dispatch({type: actionType.REGISTER_FAILURE,error});
      }
    );
  };
 }
import { AUTH } from '../constants/actionTypes';
import * as api from '../api';

export const signin = (formData, history) => async (dispatch) => {
    try {
        // longin user
        const { data } = await api.signin(formData);
        const action = {
            type: AUTH,
            data
        }
        dispatch(action);

        history.push('/');
    } catch (error) {
        console.log(error);
    }
};

export const signup = (formData, history) => async (dispatch) => {
    try {
        // sign up the user
        const { data } = await api.signup(formData);
        const action = {
            type: AUTH,
            data
        }
        dispatch(action);
        
        history.push('/');
    } catch (error) {
        console.log(error);
    }
}

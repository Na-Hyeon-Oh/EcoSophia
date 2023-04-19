import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from '../store';
import { clearUserId } from '../reducers/auth';

interface ClearUserIdAction {
    type: 'auth/clearUserId';
}

const signOutAction = (): ThunkAction<void, RootState, null, Action<string>> => {
    return async (dispatch) => {
        try {
            dispatch(clearUserId());
            // Redirect to /login route
            window.location.href = '/sign-in';
        } catch (e) {
            // Show error message to user
            console.log(e);
        }
    };
};

export default signOutAction;

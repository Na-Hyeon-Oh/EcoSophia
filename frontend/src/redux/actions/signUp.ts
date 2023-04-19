import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from '../store';
import { saveUserId } from '../reducers/auth';
import { SignInUpRequest } from '../../model/SignInUpRequest';
import { signUp } from '../../api/signUp';
import { store } from '../store'

interface SaveUserIdAction {
    type: 'auth/saveUserId';
    payload: number;
}

const signUpAction = (
    signUpRequest: SignInUpRequest
): ThunkAction<void, RootState, null, Action<string>> => {
    return async (dispatch) => {
        try {
            const userId = await signUp(signUpRequest);
            console.log(userId);
            dispatch(saveUserId(userId));

            // Redirect to /home route
            window.location.href = '/home';
        } catch (e) {
            // Show error message to user
            alert('\n회원가입에 실패하셨습니다.\n\n다시 시도해보세요.');
            console.log(e);
        }
    };
};

export default signUpAction;

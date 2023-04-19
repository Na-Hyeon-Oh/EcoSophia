import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from '../store';
import { saveUserId } from '../reducers/auth';
import { SignInUpRequest } from '../../model/SignInUpRequest';
import { signIn } from '../../api/signIn';
import { store } from '../store'

interface SaveUserIdAction {
    type: 'auth/saveUserId';
    payload: number;
}

const signInAction = (
    signInRequest: SignInUpRequest
): ThunkAction<void, RootState, null, Action<string>> => {
    return async (dispatch) => {
        try {
            const userId = await signIn(signInRequest);
            console.log(userId);
            dispatch(saveUserId(userId));

            // Redirect to /home route
            window.location.href = '/home';
        } catch (e) {
            // Show error message to user
            alert('\n로그인에 실패하셨습니다.\n\n이메일이나 비밀번호가 맞는지 확인해보세요.');
            console.log(e);
        }
    };
};

export default signInAction;

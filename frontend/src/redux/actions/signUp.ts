import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from '../store';
import { saveUserId } from '../reducers/auth';
import { SignInUpRequest } from '../../model/SignInUpRequest';
import { signUp } from '../../api/signUp';
import { createMethod } from '../actions/method';
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
            await dispatch(createMethod(userId, {
                type: "현금", name: "현금"
            }));

            // Redirect to /home route
            alert("\n회원가입을 축하드립니다:)\n\nEcoSophia와 함께 소비 습관을 점검해보아요.");
            window.location.href = '/sign-in';
        } catch (e) {
            // Show error message to user
            alert('\n회원가입에 실패하셨습니다.\n\n다시 시도해보세요.');
            console.log(e);
        }
    };
};

export default signUpAction;

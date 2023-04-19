import { Dispatch } from "redux";
import { getMethod } from "../../api/method";
import { Method } from "../../model/Method";
import { store } from '../store'

export enum MethodActionTypes {
    FETCH_METHOD = "FETCH_METHOD",
    FETCH_METHOD_SUCCESS = "FETCH_METHOD_SUCCESS",
    FETCH_METHOD_ERROR = "FETCH_METHOD_ERROR",
}

interface FetchMethodAction {
    type: MethodActionTypes.FETCH_METHOD;
}

interface FetchMethodSuccessAction {
    type: MethodActionTypes.FETCH_METHOD_SUCCESS;
    payload: Method[];
}

interface FetchMethodErrorAction {
    type: MethodActionTypes.FETCH_METHOD_ERROR;
    payload: string;
}

export type MethodAction =
    | FetchMethodAction
    | FetchMethodSuccessAction
    | FetchMethodErrorAction;

export const fetchMethod = (userId: number) => {
    return async (dispatch: Dispatch<MethodAction>) => {
        dispatch({ type: MethodActionTypes.FETCH_METHOD });
        try {
            const method = await getMethod(userId);
            dispatch({
                type: MethodActionTypes.FETCH_METHOD_SUCCESS,
                payload: method,
            });
            console.log(store.getState());
        } catch (error) {
            dispatch({
                type: MethodActionTypes.FETCH_METHOD_ERROR,
                payload: "Unexpected error",
            });
        }
    };
};


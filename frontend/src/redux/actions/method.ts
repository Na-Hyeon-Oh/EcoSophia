import { Dispatch } from "redux";
import { getMethod, postMethod, deleteMethod } from "../../api/method";
import { Method, MethodRequest } from "../../model/Method";
import { store } from '../store'

export enum MethodActionTypes {
    FETCH_METHOD = "FETCH_METHOD",
    FETCH_METHOD_SUCCESS = "FETCH_METHOD_SUCCESS",
    FETCH_METHOD_ERROR = "FETCH_METHOD_ERROR",

    CREATE_METHOD = "CREATE_METHOD",
    CREATE_METHOD_SUCCESS = "CREATE_METHOD_SUCCESS",
    CREATE_METHOD_ERROR = "CREATE_METHOD_ERROR",

    REMOVE_METHOD = "REMOVE_METHOD",
    REMOVE_METHOD_SUCCESS = "REMOVE_METHOD_SUCCESS",
    REMOVE_METHOD_ERROR = "REMOVE_METHOD_ERROR",
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

interface CreateMethodAction {
    type: MethodActionTypes.CREATE_METHOD;
}

interface CreateMethodSuccessAction {
    type: MethodActionTypes.CREATE_METHOD_SUCCESS;
    payload: Method;
}

interface CreateMethodErrorAction {
    type: MethodActionTypes.CREATE_METHOD_ERROR;
    payload: string;
}

interface RemoveMethodAction {
    type: MethodActionTypes.REMOVE_METHOD;
}

interface RemoveMethodSuccessAction {
    type: MethodActionTypes.REMOVE_METHOD_SUCCESS;
    payload: number;
}

interface RemoveMethodErrorAction {
    type: MethodActionTypes.REMOVE_METHOD_ERROR;
    payload: string;
}

export type MethodAction =
    | FetchMethodAction | FetchMethodSuccessAction | FetchMethodErrorAction
    | CreateMethodAction | CreateMethodSuccessAction | CreateMethodErrorAction
    | RemoveMethodAction | RemoveMethodSuccessAction | RemoveMethodErrorAction;

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

export const createMethod = (userId: number, methodRequest: MethodRequest) => {
    return async (dispatch: Dispatch<MethodAction>) => {
        dispatch({ type: MethodActionTypes.CREATE_METHOD });
        try {
            const newMethod = await postMethod(userId, methodRequest);
            dispatch({
                type: MethodActionTypes.CREATE_METHOD_SUCCESS,
                payload: newMethod,
            });
        } catch (error) {
            dispatch({
                type: MethodActionTypes.CREATE_METHOD_ERROR,
                payload: "Unexpected error",
            });
        }
    };
};

export const removeMethod = (userId: number, methodId: number) => {
    return async (dispatch: Dispatch<MethodAction>) => {
        dispatch({ type: MethodActionTypes.REMOVE_METHOD });
        try {
            await deleteMethod(userId, methodId);
            dispatch({
                type: MethodActionTypes.REMOVE_METHOD_SUCCESS,
                payload: methodId,
            });
        } catch (error) {
            dispatch({
                type: MethodActionTypes.REMOVE_METHOD_ERROR,
                payload: "Unexpected error",
            });
        }
    };
};


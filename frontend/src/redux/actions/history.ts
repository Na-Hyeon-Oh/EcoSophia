import { Dispatch } from "redux";
import { getHistory, postHistory, deleteHistory } from "../../api/history";
import History, { HistoryRequest } from "../../model/History";
import { store } from '../store'

export enum HistoryActionTypes {
    FETCH_HISTORY = "FETCH_HISTORY",
    FETCH_HISTORY_SUCCESS = "FETCH_HISTORY_SUCCESS",
    FETCH_HISTORY_ERROR = "FETCH_HISTORY_ERROR",

    CREATE_HISTORY = "CREATE_HISTORY",
    CREATE_HISTORY_SUCCESS = "CREATE_HISTORY_SUCCESS",
    CREATE_HISTORY_ERROR = "CREATE_HISTORY_ERROR",

    REMOVE_HISTORY = "REMOVE_HISTORY",
    REMOVE_HISTORY_SUCCESS = "REMOVE_HISTORY_SUCCESS",
    REMOVE_HISTORY_ERROR = "REMOVE_HISTORY_ERROR",
}

interface FetchHistoryAction {
    type: HistoryActionTypes.FETCH_HISTORY;
}

interface FetchHistorySuccessAction {
    type: HistoryActionTypes.FETCH_HISTORY_SUCCESS;
    payload: History[];
}

interface FetchHistoryErrorAction {
    type: HistoryActionTypes.FETCH_HISTORY_ERROR;
    payload: string;
}

interface CreateHistoryAction {
    type: HistoryActionTypes.CREATE_HISTORY;
}

interface CreateHistorySuccessAction {
    type: HistoryActionTypes.CREATE_HISTORY_SUCCESS;
    payload: History;
}

interface CreateHistoryErrorAction {
    type: HistoryActionTypes.CREATE_HISTORY_ERROR;
    payload: string;
}

interface RemoveHistoryAction {
    type: HistoryActionTypes.REMOVE_HISTORY;
}

interface RemoveHistorySuccessAction {
    type: HistoryActionTypes.REMOVE_HISTORY_SUCCESS;
    payload: number;
}

interface RemoveHistoryErrorAction {
    type: HistoryActionTypes.REMOVE_HISTORY_ERROR;
    payload: string;
}

export type HistoryAction =
    | FetchHistoryAction | FetchHistorySuccessAction | FetchHistoryErrorAction
    | CreateHistoryAction | CreateHistorySuccessAction | CreateHistoryErrorAction
    | RemoveHistoryAction | RemoveHistorySuccessAction | RemoveHistoryErrorAction;

export const fetchHistory = (userId: number) => {
    return async (dispatch: Dispatch<HistoryAction>) => {
        dispatch({ type: HistoryActionTypes.FETCH_HISTORY });
        try {
            const history = await getHistory(userId);
            dispatch({
                type: HistoryActionTypes.FETCH_HISTORY_SUCCESS,
                payload: history,
            });
            console.log(store.getState());
        } catch (error) {
            dispatch({
                type: HistoryActionTypes.FETCH_HISTORY_ERROR,
                payload: "Unexpected error",
            });
        }
    };
};

export const createHistory = (userId: number, historyRequest: HistoryRequest) => {
    return async (dispatch: Dispatch<HistoryAction>) => {
        dispatch({ type: HistoryActionTypes.CREATE_HISTORY });
        try {
            const newHistory = await postHistory(userId, historyRequest);
            dispatch({
                type: HistoryActionTypes.CREATE_HISTORY_SUCCESS,
                payload: newHistory,
            });
        } catch (error) {
            dispatch({
                type: HistoryActionTypes.CREATE_HISTORY_ERROR,
                payload: "Unexpected error",
            });
        }
    };
};

export const removeHistory = (userId: number, historyId: number) => {
    return async (dispatch: Dispatch<HistoryAction>) => {
        dispatch({ type: HistoryActionTypes.REMOVE_HISTORY });
        try {
            await deleteHistory(userId, historyId);
            dispatch({
                type: HistoryActionTypes.REMOVE_HISTORY_SUCCESS,
                payload: historyId,
            });
        } catch (error) {
            dispatch({
                type: HistoryActionTypes.REMOVE_HISTORY_ERROR,
                payload: "Unexpected error",
            });
        }
    };
};



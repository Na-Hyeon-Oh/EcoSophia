import { Dispatch } from "redux";
import { getHistory } from "../../api/history";
import History from "../../model/History";
import { store } from '../store'

export enum HistoryActionTypes {
    FETCH_HISTORY = "FETCH_HISTORY",
    FETCH_HISTORY_SUCCESS = "FETCH_HISTORY_SUCCESS",
    FETCH_HISTORY_ERROR = "FETCH_HISTORY_ERROR",
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

export type HistoryAction =
    | FetchHistoryAction
    | FetchHistorySuccessAction
    | FetchHistoryErrorAction;

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


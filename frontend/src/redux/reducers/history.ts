import History from "../../model/History";
import { HistoryAction, HistoryActionTypes } from "../actions/history";

export interface HistoryState {
    data: Array<History>;
    isLoading: boolean;
    error: string | null;
}

const initialState: HistoryState = {
    data: [],
    isLoading: false,
    error: null,
};

const historyReducer = (
    state = initialState,
    action: HistoryAction
): HistoryState => {
    switch (action.type) {
        case HistoryActionTypes.FETCH_HISTORY:
            return { ...state, isLoading: true, error: null };
        case HistoryActionTypes.FETCH_HISTORY_SUCCESS:
            return { ...state, isLoading: false, data: action.payload };
        case HistoryActionTypes.FETCH_HISTORY_ERROR:
            return { ...state, isLoading: false, error: action.payload };
        case HistoryActionTypes.CREATE_HISTORY:
            return { ...state, isLoading: true, error: null };
        case HistoryActionTypes.CREATE_HISTORY_SUCCESS:
            return { ...state, isLoading: false, data: [...state.data, action.payload] };
        case HistoryActionTypes.CREATE_HISTORY_ERROR:
            return { ...state, isLoading: false, error: action.payload };
        case HistoryActionTypes.REMOVE_HISTORY:
            return { ...state, isLoading: true, error: null };
        case HistoryActionTypes.REMOVE_HISTORY_SUCCESS:
            return { ...state, isLoading: false, data: state.data.filter((history) => history.id !== action.payload)};
        case HistoryActionTypes.REMOVE_HISTORY_ERROR:
            return { ...state, isLoading: false, error: action.payload };
        default:
            return state;
    }
};

export default historyReducer;

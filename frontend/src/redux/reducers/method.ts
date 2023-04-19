import { Method } from "../../model/Method";
import { MethodAction, MethodActionTypes } from "../actions/method";

export interface MethodState {
    data: Array<Method>;
    isLoading: boolean;
    error: string | null;
}

const initialState: MethodState = {
    data: [],
    isLoading: false,
    error: null,
};

const methodReducer = (
    state = initialState,
    action: MethodAction
): MethodState => {
    switch (action.type) {
        case MethodActionTypes.FETCH_METHOD:
            return { ...state, isLoading: true, error: null };
        case MethodActionTypes.FETCH_METHOD_SUCCESS:
            return { ...state, isLoading: false, data: action.payload };
        case MethodActionTypes.FETCH_METHOD_ERROR:
            return { ...state, isLoading: false, error: action.payload };
        default:
            return state;
    }
};

export default methodReducer;

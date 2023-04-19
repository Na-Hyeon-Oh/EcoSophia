import { Method } from "../../model/Method";
import { FilterActionTypes, FilterAction } from "../actions/filter";

interface FilterState {
    selectedMethods: Array<Method>,
}

const initialState: FilterState = {
    selectedMethods: []
};

const filterReducer = (
    state = initialState,
    action: FilterAction
): FilterState => {
    switch (action.type) {
        case FilterActionTypes.UPDATE_FILTER:
            return { ...state, selectedMethods: action.payload };
        default:
            return state;
    }
};

export default filterReducer;

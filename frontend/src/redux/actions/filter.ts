import { Dispatch } from "redux";
import { Method } from '../../model/Method';

export enum FilterActionTypes {
    UPDATE_FILTER = 'UPDATE_FILTER',
};

interface UpdateFilterAction {
    type: FilterActionTypes.UPDATE_FILTER;
    payload: Array<Method>;
};

export type FilterAction =
    | UpdateFilterAction;

export const updateFilter = (methodList: Array<Method>) => {
    return async (dispatch: Dispatch<FilterAction>) => {
        console.log(methodList);
        try {
            dispatch({
                type: FilterActionTypes.UPDATE_FILTER,
                payload: methodList,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

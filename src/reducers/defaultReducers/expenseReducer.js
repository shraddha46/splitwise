import {
    ADD_EXPENSE_LOADING,
    ADD_EXPENSE_SUCCESS,
    ADD_EXPENSE_ERROR
} from '../../action/type';

const EXPENSE_INITIAL_STATE = {
    expenseData: []
}

export const addExpenseReducer = (state = EXPENSE_INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_EXPENSE_LOADING: {
            return { ...state, loading: true }
        }
        case ADD_EXPENSE_SUCCESS: {
            return { expenseData: action.data, loading: false, success: true }
        }
        case ADD_EXPENSE_ERROR: {
            return { ...state, loading: false, success: false, error: action.data.error }
        }
        default:
            return state;
    }
};
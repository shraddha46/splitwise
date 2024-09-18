import {
    ADD_EXPENSE_LOADING,
    ADD_EXPENSE_SUCCESS,
    ADD_EXPENSE_ERROR
} from './type';

import {addExpenseAPI} from '../service/services';

export const addExpenseAction=(payload)=>{
    return(dispatch)=>{
        return new Promise((resolve,reject)=>{
            dispatch({type: ADD_EXPENSE_LOADING})
            addExpenseAPI(payload)
            .then((response)=>{
                if(response.status===200)
                {
                    dispatch({
                        type: ADD_EXPENSE_SUCCESS,
                        data: response.data
                    })
                }
                return resolve(response.data);
            })
            .catch((error)=>{
                if(error){
                    dispatch({
                        type:ADD_EXPENSE_ERROR,
                        data:{error:error.response.data}
                    })
                }
                return reject(error.response.data)
            })
        })
    }
}
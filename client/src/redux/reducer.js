
import {SHOW_ALERT,CLEAR_ALERT,TOGGLE_SIDEBAR} from './constants'

export const showAlertReducer=(state={},data)=>{
    switch (data.type){
        case SHOW_ALERT:
            return data.payload
        case CLEAR_ALERT:
            return{...state,showAlert:false,alertType:'',alertText:''}
        default:
            return state
    }
}

export const toggleSidebarReducer=(state={show:false},data)=>{
   
    switch(data.type){
        case TOGGLE_SIDEBAR:
            return({
                show:!state.show
            })
            default:
                return state


    }
}

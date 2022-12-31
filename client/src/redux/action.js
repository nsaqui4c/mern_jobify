import {SHOW_ALERT,CLEAR_ALERT,TOGGLE_SIDEBAR} from './constants'

export const showAlertAction=(alertType,alertText)=>(dispatch)=>{
    
      dispatch({
        type: SHOW_ALERT,
        payload: {alertType,alertText,showAlert:true},
      });

}

export const clearAlertAction =()=>(dispatch)=>{
   
    dispatch({
        type:CLEAR_ALERT
    })
}

export const toggleSidebarAction =()=>(dispatch)=>{
  
  dispatch({
    type:TOGGLE_SIDEBAR
  })
}





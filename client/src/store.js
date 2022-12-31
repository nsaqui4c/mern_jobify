// import {combineReducers,applyMiddleware,createStore} from 'redux'
// import thunk from 'redux-thunk'
// import { composeWithDevTools } from "redux-devtools-extension";



// const initialState={todos: [{id:123, text:'hello', completed: false}] }
// const reducer=combineReducers({todos: [{id:123, text:'hello', completed: false}] })
// const store = createStore(reducer,{user:[]},composeWithDevTools(applyMiddleware(thunk)))
// export default store
import {toggleSidebarReducer, showAlertReducer} from './redux/reducer'
import { configureStore } from '@reduxjs/toolkit'
const reducer = {
    showAlert:showAlertReducer,
    toggleSidebar:toggleSidebarReducer,
    
  }

  const preloadedState = {
   // showAlertReducer:{alertText:"No text for ALet",alertType:'success'}
  }
  const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),//.concat(logger),
    //default middlewares are [thunk, immutableStateInvariant, serializableStateInvariant]
    devTools: true, //process.env.NODE_ENV !== 'production',
    preloadedState,
  
  })

  export default store
  
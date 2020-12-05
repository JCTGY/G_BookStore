import { combineReducers } from 'redux';

import checkOutReducer from './checkOutReducer';

//Combine all the sub reducers
const rootReducer = combineReducers({
    checkOut: checkOutReducer,
})

export default rootReducer;
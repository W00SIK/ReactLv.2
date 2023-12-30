import React from 'react'
import {createStore, combineReducers} from "redux"
import hendlerReducer from '../modules/hendlerReducer';

const rootReducer = combineReducers({
    hendlerReducer,
});

const store = createStore(rootReducer);

export default store;
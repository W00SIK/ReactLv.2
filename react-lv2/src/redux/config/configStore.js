import React from 'react'
import {createStore, combineReducers} from "redux"
import hendlerButton from '../modules/hendlerButton';

const rootReducer = combineReducers({
    hendlerButton,
});

const store = createStore(rootReducer);

export default store;
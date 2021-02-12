import { createStore, applyMiddleware, compose } from 'redux';
// compose is meaning founding
import thunk from "redux-thunk";
import { reducers } from '../reducers';
import AsyncStorage from '@react-native-async-storage/async-storage'


export const store = createStore(reducers, compose(applyMiddleware(thunk)));

 
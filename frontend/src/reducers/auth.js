import {
    SIGNUP_FAIL, 
    SIGNUP_SUCCESS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT}
     from '../actions/types'
import store from '../store';

const initialState = {
    token:localStorage.getItem('token'), 
    isAuthenticated: null,
    loading: false

};
 export default function(state= initialState, action){
     const {type, payload}= action;

     switch(type){
         case LOGIN_SUCCESS:
             localStorage. setItem('token', payload.access);
             return {
             ...state,
             isAuthenticated:true,
             loading:false,
             token:payload.success
             }
        case SIGNUP_SUCCESS:
            return{
                ...store,
                isAuthenticated:false,
                loading:true
            }
            
        case SIGNUP_FAIL:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token')
            
            return{
                ...store,
                token:null,
                isAuthenticated:false,
                loading:false
            }
        default:
            return state      
     }
 }
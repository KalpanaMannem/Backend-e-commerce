import React from 'react';
import axios from '../helpers/axios';
import { authConstants } from './constants';

export const login = (users) => {
    console.log(users)

  return async(dispatch)=>{

      dispatch({type:authConstants.LOGIN_REQUEST});

        const res= await axios.post(`/admin/signin`,{
            ...users
        })

        if(res.status===200){
            const{token,user}=res.data;
            localStorage.setItem("token",token);
            localStorage.setItem("user",JSON.stringify(user))
            dispatch({
                type:authConstants.LOGIN_SUCCESS,
                payload:{
                    token,user
                }
            })
        }else{
            if(res.status=== 400){
                dispatch({
                    type:authConstants.LOGIN_FAILURE,
                    payload:{error:res.data.error}
                })
            }
        }


    
  }
};

export const isUserLoggedIn=()=>{
    return async dispatch=>{
        const token=localStorage.getItem("token");
        if(token){
            const user=JSON.parse(localStorage.getItem("user"));
            dispatch({
                type:authConstants.LOGIN_SUCCESS,
                payload:{
                    token,user
                }
            })
        }else{
            dispatch({
                type:authConstants.LOGIN_FAILURE,
                payload:{error:"Failed to login"}
            })
        }
    }
}
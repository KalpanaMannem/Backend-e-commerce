import axios from '../helpers/axios';
import {  userConstants } from './constants';

export const signup = (users) => {
    console.log(users)

  return async(dispatch)=>{

      dispatch({type:userConstants.USER_REGISTER_REQUEST});

        const res= await axios.post(`/admin/signup`,{
            ...users
        })

        if(res.status===201){
            const{message}=res.data;
            dispatch({
                type:userConstants.USER_REGISTER_SUCCESS,
                payload:{
                    message
                }
            })
        }else{
            if(res.status=== 400){
                dispatch({
                    type:userConstants.USER_REGISTER_FAILURE,
                    payload:{error:res.data.error}
                })
            }
        }


    
  }
};
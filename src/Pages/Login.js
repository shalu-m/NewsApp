import React ,{useState,useEffect, useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import '../App.css';
import { useNavigate,Link } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import { setLogin ,Log_in,logstate} from '../redux/slice/counterSlice';


function Login(){
    const value=useSelector((state)=>state.counter)
    const dispatch=useDispatch()
   
   const{login,login_state}=value
   const navigation=useNavigate()
   let log_store=localStorage.getItem('userLogin')

  console.log(login)
  useEffect(()=>{
    if(login_state==true || log_store=='true'){
        navigation('/home')
    }
  },[login_state])

 
   
    return(
        <div className='login-width pt-4 pb-4'>
            <h3 className='text-center'>Log in</h3>
           
            <form>
                <div className="form-group">
                    <label ><b>Email</b></label>
                    <input type="text" className="form-control" id="formGroupExampleInput"  placeholder="email"  onChange={(e)=>dispatch( setLogin({...login,email:e.target.value}))}/>
                </div>
                <div className="form-group">
                    <label><b>Password</b></label>
                    <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="passward"  onChange={(e)=>dispatch( setLogin({...login,password:e.target.value}))}/>
                </div>
                <button  type='button' onClick={()=>dispatch(Log_in(login))} className='btn btn-dark butttn'>Log in</button>
                <p>if you don't have an account..<Link to={'/register'}>Register</Link></p>
            </form>
            
        </div>
    )
}
export default Login
import React ,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


import { useNavigate } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import { setLogin ,Log_in,logstate,setRegister,userRegister} from '../redux/slice/counterSlice';


export default function Register(){

    let navigation=useNavigate()
    const {register,registerState}=useSelector((state)=>state.counter)
    const dispatch=useDispatch()
    useEffect(()=>{
        if(registerState==true){
            navigation('/')
        }
    },[registerState])

    
    return(
        <div className='login-width pt-4 pb-4'>
            <h3 className='text-center'>Register</h3>
            <form>
                <div className="form-group">
                    <label ><b>Name :</b></label>
                    <input type="text" className="form-control" id="formGroupExampleInput"  placeholder="Name" onChange={(e)=>dispatch( setRegister({...register,name:e.target.value}))}/>
                </div>
                <div className="form-group">
                    <label><b>Email :</b></label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="email"  onChange={(e)=>dispatch( setRegister({...register,email:e.target.value}))}/>
                </div>
                <div className="form-group">
                    <label><b>Password :</b></label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="passward" onChange={(e)=>dispatch( setRegister({...register,password:e.target.value}))} />
                </div>
                
                <button  type='button' className='butttn btn btn-dark ' onClick={()=>dispatch(userRegister(register))}>Register</button>
            </form>
            
        </div>
    )
}
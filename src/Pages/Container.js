import {  json, useNavigate, useParams } from "react-router"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import { useSelector ,useDispatch} from "react-redux";
import { useEffect } from "react";



export default function Container(){
    const params=useParams()
    const {list,login_state}=useSelector((state)=>state.counter)
   
   
    if(!localStorage.getItem('bookmark')){
        localStorage.setItem('bookmark',JSON.stringify([]))
    }
    const add=()=>{
        list.filter((value,i)=>{
            if(params.id==value.id){
                let storage=JSON.parse(localStorage.getItem('bookmark'))
                storage.push(value)
                localStorage.setItem('bookmark',JSON.stringify(storage))
                
            }
        })
           
    }
    
   
    return(
        <div>
            <Header/>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-8">
                    
                        {list && list.map((value,index)=>{
                            if(value.id==params.id){
                                return(
                                    <div key={index}>
                                        <div className="row mb-3">
                                            <div className="col-11">
                                                <h3>{value.title}</h3>
                                            </div>
                                            <div className="col-1">
                                                <button type="button" onClick={add} className='btn btn-outline-danger'>+</button>
                                            </div> 
                                        </div>
                                        <img src={value.image} className='view-wid'/>
                                        <p>{value.author}</p>
                                        <p>{value.country}</p>
                                        <p>{value.date}</p>
                                        <h4 className="mb-2 mt-2">{value.content_title}</h4>
                                        <div className="mt-3">
                                        {value.content_para.map((item,i)=>{
                                            return(
                                                <div key={i}>
                                                    <h6 >{item}</h6>
                                                </div>
                                            )
                                        })}
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                    <div className="col-4">
                        <h2 className="text-center">Top Stories</h2>
                        {list && list.map((val,i)=>{
                            if(val.catagory=='Story' || val.catagory=='War'){
                                return(
                                    <div key={i}>
                                        <ul>
                                            <li><Link to={`/container/${val.id}`} className='link_clr'><b>{val.title}</b></Link></li>
                                        </ul>
                                        

                                    </div>
                                )
                            }
                        })}
                        
                    </div>
            
                </div>
            </div>
            <Footer/>
            
        </div>
    )
}
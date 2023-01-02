
import React, { useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBookmark} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate,Link, useLocation, useParams } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import { logstate ,setCatagory,setPathName} from "../redux/slice/counterSlice";
import { FaSearch } from 'react-icons/fa';



export default function Header(){
    const {list,login_state,filterCatagory}=useSelector((state)=>state.counter)
  const dispatch=useDispatch()
 
  let log_store=localStorage.getItem('userLogin')
    const navigation=useNavigate();

  let userName=localStorage.getItem('user_name')
  const location=useLocation()
  
  
    
   
  const path=()=>{
      dispatch(setPathName(location.pathname))
  }
  useEffect(()=>{
      path()
  },[location])

  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])


    useEffect(()=>{
        filter_catagory()
       
    },[])


    useEffect(()=>{
        if(login_state==false && log_store=='false'){
            navigation('/')
        }
    },[])


 //change states
  const change_states=()=>{
    dispatch(logstate(false))
    localStorage.setItem('userLogin',false)
    navigation('/')
    localStorage.setItem('user_name','')
   
    
  }
  //catagory
  const filter_catagory=()=>{
    let ids=list.map(i=>i.catagory)
    let filtered=list.filter(({catagory},index)=>!ids.includes(catagory,index+1))
    dispatch(setCatagory(filtered))
  }
  
   
 //type
    let country_id=list.map(value=>value.country)   
    let filter_country=list.filter(({country},index)=>!country_id.includes(country,index+1))
  //bookmark
  
    return(
        <div>
            
            <nav className="navbar justify-content-between nav_color">
                <div className="container-fluid">
                    <img src='https://www.pngitem.com/pimgs/m/326-3266004_transparent-sky-news-logo-hd-png-download.png' className="newsLogo"/>
                
                <h4>Welcome {userName}</h4>
                <form className="form-inline">
                    <h5><Link to={'/bookmark'} className=' mr-4'><FontAwesomeIcon icon={faBookmark} className='icon_color'/></Link></h5>
                     <button className="btn btn-danger my-2 my-sm-0 mr-3" type="button" onClick={change_states}>Log Out</button>
                   
                </form>
                </div>
            </nav>
            <hr className="m-0 p-0"/>
            
            <nav className="navbar nav_color">
                <div className="container-fluid">
                    <h5><Link to={'/home'} className='link_color'>Home</Link></h5>
                    {filterCatagory && filterCatagory.map((news,index)=>{
                        return(
                            <div key={index}>
                                
                                <h5><Link to={`/view/${news.catagory}`} className='link_color'>{news.catagory}</Link></h5>
                                
                            </div>
                        )
                    })}
                    <form className="form-inline">
                        <button><Link to={'/search'} className='text-dark'><FaSearch className="mr-4"/>Search</Link></button>
                    </form>
                </div>
            </nav>
            <nav className="navbar justify-content-between second_nav">
                <div className="container-fluid">
                {filter_country && filter_country.map((val,index)=>{
                    return(
                        <div key={index}>
                            <h6><Link to={`/view/${val.country}`} className='link_clr'>{val.country}</Link></h6>
                        </div>
                    )
                })}
                </div>
            </nav>

        </div>
    )
}
import {
    BrowserRouter as Router,
    Routes,
    Route,
    
} from 'react-router-dom'
import Home from "./Pages/Home"
import Container from "./Pages/Container"
import View from "./Pages/View"
import Bookmark from "./Pages/Bookmark"
import { store } from "./redux/store"
import { Provider } from 'react-redux'
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Search from "./Pages/search"



export default function MainRouts(){
    
    return(
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/"  exact element={<Login/>}/>
                    <Route path="/home" element={<Home />}/>
                    <Route path='/container/:id' element={<Container/>}/>
                    <Route path="/view/:catagory" element={<View/>}/>
                    <Route path="/bookmark" element={<Bookmark/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/search" element={<Search/>}/>
                   
                </Routes>
            </Router>

        </Provider>
        
    )
}
import React, { Component} from "react";
import "./Home.css"
import { ChatEngine } from "react-chat-engine";
import Navbar from "../Navbar/Navbar";
import MainContent from "../MainContent/MainContent";
import Sign from "../Sign/Sign";
import Loginpage from "../Loginpage/Loginpage";
import News from "../News/News";
import App from "../App/App";
import Post from  "../Post/Post";
import 'bootstrap/dist/css/bootstrap.min.css';



class Homepage extends Component{
    constructor (props){
        super(props)
        this.state={}
    }
    render(){
        return (
            <div>


                

        {/*              
        
               <MainContent/> 
               <Loginpage/>  
               <Sign/>
               <Navbar/>  
               <Post/>
               <News/>     
                <App/> 
                 <ChatEngine/>
         
         */}
 

                 </div>
        );
    }
}
export default Homepage;

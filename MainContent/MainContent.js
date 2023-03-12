import { Grid, ImageList } from "@mui/material";
import React, { Component} from "react";
import "./MainContent.css"
import {motion} from 'framer-motion'



class MainContent extends Component{
    constructor (props){
        super(props)
        this.state={}
    }
    render(){
        return (
            <div className="video"> 
       
<video src= {"././video/VD.mp4"} autoPlay loop muted  />
     
     <div className="girl "> 
<h1>   FRED!!  </h1>
<h1>  ( Functional Recovery  & Empowerment for Depression)   </h1>
<p > "  A Website that gives Opportunity To People to Express their Trauma and Bad Experience and Connect  with The People of the World Who Have Delt With It Before to Feel Better"   </p>


     </div>
            </div>
        );
    }
}
export default MainContent ;

import React, { Component} from "react";
import {motion} from 'framer-motion'
import "./Navbar.css"
import { Grid } from "@mui/material";

class Navbar extends Component{
    constructor (props){
        super(props)
        this.state={}
    }
    render(){
        return (
            <div>
<motion.div animate={{scale:1}} className="navbar_barcontent">
    <Grid container>
        <Grid item xs={0}>  
        <h1>  </h1>
      
          </Grid> 
       <Grid item xs={1}> <img src={"././Images/care.jpg"} height="800" width="1500"/> 

        </Grid>


        <Grid>  

           

                <motion.button whileHover={{scale:2}} whileTap={{scale:0.8}} className="home"> HOME </motion.button>
                
                <motion.button whileHover={{scale:2}} whileTap={{scale:0.8}} className="about"> ABOUT US </motion.button>
                
                <motion.button whileHover={{scale:2}} whileTap={{scale:0.8}} className="help"> HELP </motion.button>
                
                <motion.button whileHover={{scale:2}} whileTap={{scale:0.8}} className="contact"> CONTACT US  </motion.button>


 <input    className="search" text="text" placeholder="SEARCH HERE"/>  




            
        </Grid >
        <Grid item xs={2}> 
        
         
   </Grid>
         
     </Grid>
</motion.div>
            </div>

            

        
      
        );
    }
}
export default Navbar;
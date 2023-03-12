import { Grid, ImageList } from "@mui/material";
import React , {Component} from "react";
import './Loginpage.css';
import {motion} from 'framer-motion'
import { Link } from "react-router-dom";

class Loginpage extends Component{
    constructor(props) {
        super(props);
        this.state={ }
        }
    
    render(){
        return (

            
            <div  className=" whole "> 

 


                <Grid container>
                    <Grid item xs={0} > 
                    <motion.div  className="info">
                        
                       



                    </motion.div>
                    
                      </Grid>

                    <Grid item xs={4.3}>
                        <div className="Loginpage">
                            <div>
                                <img src={"././Images/nit.jpg"} height="800" width="1500"/>
                            </div>
                        </div>
                <div>
                   
                        </div>
                    </Grid>

                    <Grid item xs={3} > 
                    <motion.div animate={{scale:0.85}} className="Login_box" > 
                    <h1> UserName </h1><input className="Loginpage_text" type="text"/> 
                     <h1> Password</h1> <input className="Loginpage_pass" type="password"/> 
                   <ul>  <motion.button whileHover={{scale:2}} whileTap={{scale:0.85}} className="Loginpage_sn"> SIGN IN </motion.button> </ul>






                  <Link to = "/sign"> </Link>
                  


                    </motion.div>
                    
                    
                     </Grid>
                </Grid>
                </div>
        )
    }
}
export default Loginpage;
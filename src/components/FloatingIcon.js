import React from "react"
import Fab from '@material-ui/core/Fab';
import "./FloatingIcon.css"



function FloatingIcon(){

    return(<div className="floating-btn">
   <a href="#top"><Fab color="primary" aria-label="add"> 
    <i className="fas fa-arrow-up"></i>
      </Fab>
      </a> 

    </div>)
}


export default FloatingIcon
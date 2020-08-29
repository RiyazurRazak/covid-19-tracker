import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import {Link} from 'react-router-dom'
import "./Navbar.css"


function Navbar(){


const[open,setOpen]=useState(false)
    return(<div>

   <AppBar className="navbar">
        <Toolbar>
        <div><i onClick={()=>setOpen(true)}className="burger-icn fas fa-bars"></i></div>
          
            <h3>Covid-19 Tracker</h3>
            <h3 className="slogan">#Stay Home Stay Safe</h3>
        </Toolbar>
      </AppBar>

      <Drawer
      action="left"
      open={open}
      onClose={() => setOpen(false)}
      >
      <div className="inner-drawer">
      <List component="nav" aria-label="pages link">
          <Link to={'/'}>
        <ListItem button>
          <ListItemIcon>
          <i className="nav-icons fas fa-home"></i>
          </ListItemIcon>
          <ListItemText className="link-text" primary="Home" />
        </ListItem>
        </Link>
        <Divider />
        <Link to={'/precautions'}>
        <ListItem button>
          <ListItemIcon>
          <i className="nav-icons fas fa-hands-wash"></i>
          </ListItemIcon>
          <ListItemText className="link-text" primary="Home" />
        </ListItem>
        </Link>
        <Divider />
        </List>
      </div>

      </Drawer>
    </div>)
}

export default Navbar;

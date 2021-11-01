import React, {useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {Link} from "react-router-dom";
// import MenuIcon from '@mui/icons-material/Menu';
import { UserContext, ChannelContext } from '../App'

export default function NavBar() {
  const user = useContext(UserContext)
  console.log("user",user)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Project
          </Typography>
          <Link to = "/login" >Login</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
//import MenuIcon from '@mui/icons-material/Menu';
// import Table from "./component/Table.js";
import {  Link } from "react-router-dom";
export default function Header() {
  return (
    <Box sx={{ flexGrow:1 }}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          {/* <Button variant="contained">Contained</Button> */}
          <Link to="/Table" style={{textDecoration:'none'}}><Button variant="contained">Click Here</Button></Link>

          </IconButton>
          <Typography variant="h3" color="inherit" component="div"  sx={{ pl: 50 }}  >
            TODO APP
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


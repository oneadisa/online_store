import React from 'react';
// import ReactBootstrap from 'react-bootstrap';
import 'react-pro-sidebar/dist/css/styles.css';
// import { ProSidebar } from 'react-pro-sidebar';
import ProSidebars from './ProSidebar';
import Navbars from './Navbar';
// import { Navbar } from 'react-bootstrap';

function App(){
return(
    <><h1>My Website</h1><ProSidebars />
    <Navbars/>
    <p> this is an online store containing all of your favourite products.</p></>

)
}

export default App;

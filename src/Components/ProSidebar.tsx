import { Menu, MenuItem, ProSidebar, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';


function ProSidebars(){
    return(
 <ProSidebar>
  <Menu iconShape="square">
    <MenuItem></MenuItem>
    <SubMenu title="Components">
      <MenuItem>Component 1</MenuItem>
      <MenuItem>Component 2</MenuItem>
    </SubMenu>
  </Menu>
</ProSidebar>
    )
}

export default ProSidebars;
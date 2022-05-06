import React from 'react';
import{Link,NavLink} from 'react-router-dom';
import './NavBar.css'
function NavBar(){
return <div ClassName='nav'>

<NavLink to='/Register' >Register</NavLink>
<NavLink to='/AspirantDashboard' >AspirantDashboard</NavLink>

<NavLink to='/VoterDashboard' >VoterDashboard</NavLink>

<NavLink to='/Login' >Login</NavLink>
</div>
}
export default NavBar
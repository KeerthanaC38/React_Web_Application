// LeftNavigation.js

import React from 'react';
import { Link } from 'react-router-dom';
import './LeftNavigation.css';
import './LeftNavigationStyles.css';
const LeftNavigation = () => {
  return (
    <div id="sidebar">
	<ul>
		<li>
			<h2>Smart Doorbells</h2>
			<ul>
				<li id="first"><Link to="/ConsoleList?maker=Ring">Ring</Link></li>
				<li><Link to="/ConsoleList?maker=SimpliSafe">SimpliSafe</Link></li>
				<li><Link to="/ConsoleList?maker=Google">Google</Link></li>
			</ul>
		</li>
		<li>
			<h2>Smart DoorLocks</h2>
			<ul>
				<li id="first"><Link to="/GamesList?maker=Lockly">Lockly</Link></li>
				<li><Link to="/GamesList?maker=Level">Level</Link></li>
				<li><Link to="/GamesList?maker=Kwikset">Kwikset</Link></li>
			</ul>
		</li>
		<li>
			<h2>Smart Speakers</h2>
			<ul>
				<li id="first"><Link to="/TabletList?maker=Amazon">Amazon</Link></li>
				<li><Link to="/TabletList?maker=JBL">JBL</Link></li>
				<li><Link to="/TabletList?maker=Yamaha">Yamaha</Link></li>
			</ul>
		</li>
		<li>
            <h2>Smart Lightings</h2>
            <ul>
				<li id="first"><Link to="/LightingList?maker=Philips">Philips</Link></li>
				<li><Link to="/LightingList?maker=Sengled">Sengled</Link></li>
				<li><Link to="/LightingList?maker=Geeni">Geeni</Link></li>
            </ul>
        </li>
        <li>
            <h2>Smart Thermostats</h2>
            <ul>
				<li id="first"><Link to="/ThermostatList?maker=Google">Google</Link></li>
				<li><Link to="/ThermostatList?maker=Mysa">Mysa</Link></li>
				<li><Link to="/ThermostatList?maker=Emerson">Emerson</Link></li>
            </ul>
        </li>
		<li>
			<h2>Accessories</h2>
			<ul>
				<li id="first"><Link to="/AccessoryList?maker=Ring">Ring</Link></li>
				<li><Link to="/AccessoryList?maker=SimpliSafe">SimpliSafe</Link></li>
				<li><Link to="/AccessoryList?maker=Google">Google</Link></li>
			</ul>
		</li>
		
	</ul>
</div>
  );
};  

export default LeftNavigation;
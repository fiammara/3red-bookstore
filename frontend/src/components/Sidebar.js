import React, { Component } from 'react';

import Navbar  from 'react-bootstrap/lib/Navbar';

import './components.css';
function Sidebar(){
    return (

<Navbar inverse collapseOnSelect className="Navbar">
        <sidebar>
        <div className="navmenu">
			<ul class="mainmenu">
				
				<li>
					<a id  = "browse" href="#">
						<i class="fa fa-globe menu-icon" aria-hidden="true"></i>Browse</a>
				</li>
				<li>
					<a href="#">
						<i class="fa fa-shopping-cart menu-icon" aria-hidden="true"></i>Buy Books</a>

				</li>
				<li>
					<a id="favourite" href="#">

						<i class="fa fa-star menu-icon" aria-hidden="true"></i>Favourite Books</a>
				</li>
				<li>
					<a href="#">
						<i class="fa fa-th-list menu-icon" aria-hidden="true"></i>Wishlist</a>
				</li>
			</ul>
		
        </div>
        
        </sidebar>
         
        </Navbar>    
    )
}
export default Sidebar
import React, { Component } from 'react';

export default class Sidebar extends Component {
  render() {
    return (
      <sidebar>
        <span id="sidebar-text-wrap">
			<div>
        <div className="profileContainer">
          <image src="http://www.spinferno.com/wp-content/uploads/avatar.png"  height="87" width="88" /><br />
          Jane Doe          
        </div>
        <div className="navContainer">
          <image src="http://www.spinferno.com/wp-content/uploads/navbuttons.png" height="505" width="126" />      
        </div>
			</div>
        </span>
      </sidebar>
    );
  }
}

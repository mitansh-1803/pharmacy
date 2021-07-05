import React from 'react';

const TopBar = () => {

  return ( <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid" >
      <a className="navbar-brand" href="#">Pharmacy Store</a>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{flexGrow:"0"}}>
        <div className="navbar-nav">
        <a className="navbar-brand" href="#">Login Here</a>
        </div>
      </div>
    </div>
  </nav> );
}
 
export default TopBar;
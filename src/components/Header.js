
import React from "react";
import { Link } from "react-router-dom";
import ProductsMenu from './menus/ProductsMenu';

const Header = () => {
  return (
    <header>
      <nav style={navStyle} className="navbar navbar-expand-lg navbar-light bg-light">
          <ul style={ulStyle} >
            <li style={liStyle}><Link to={'/about'} className="nav-link">About</Link></li>
            <li style={liStyle}><Link to={'/products'} className="nav-link"><ProductsMenu/></Link></li>
            <li style={liStyle}><Link to={'/'} className="nav-link">Home</Link></li>
            <li style={liStyle}><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li style={liStyle}><Link to={'/search'} className="nav-link">Search</Link></li>
          </ul>
          </nav>
    </header>
  );
};

const navStyle = {
  marginTop: '10px'
};

const ulStyle = {
  display: 'flex',
  margin: '0 25%',
  listStyle: 'none',
  justifyContent: 'space-around'
};

const liStyle = {
  display: 'inline'
};

export default Header;
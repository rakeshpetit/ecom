
import React from "react";
import { Link } from "react-router-dom";
import ProductsMenu from './menus/ProductsMenu';
import './Header.css'; 
import logo from '../assets/Logo.png';

const Header = () => {
  return (
    <header>
      <nav style={navStyle} className="navbar navbar-expand-lg navbar-light bg-light">
          <ul style={ulStyle} >
            <li style={liStyle}><Link to={'/about'} className="nav-link">About</Link></li>
            <li style={liStyle}><Link to={'/products'} className="nav-link"><ProductsMenu/></Link></li>
            <li style={imgLiStyle}>
            <Link to={'/'} className="nav-link">
              <img style={imgStyle} src={logo} alt="Tannaaz"/>
            </Link></li>
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
  margin: '0 20%',
  listStyle: 'none',
  alignItems: 'flex-end',
  justifyContent: 'space-between'
};

const imgStyle = {
  width: '50%'
};

const liStyle = {  
  width: '20%',
  display: 'inline'
};

const imgLiStyle = {
  width: '20%',
  paddingTop: '10px',
  display: 'inline'
};



export default Header;
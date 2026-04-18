import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// Props are used to pass data from one component to another component. Props are read-only, which means that a component cannot change the props it receives from its parent component. Props are used to make components reusable and to create dynamic user interfaces.
function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
        <div className=" container container-fluid ">
          <Link to="/" className="navbar-brand ">
            {props.title} </Link>

          <Link to="/home" className="navbar-brand ">
            {props.homeText}
          </Link>
          <Link to="/about" className="navbar-brand ">
            {props.aboutText}
          </Link>
          <Link to="/contact" className="navbar-brand ">
            {props.contactText}
          </Link  >
          <form className="d-flex my-10" role="search" >
            <input
              id="search"
              className="form-control me-2"
              type="search"
              aria-label="Search"
              style={{
                backgroundColor: props.mode === 'dark' ? '#0b2c4f' : 'white',
                color: props.mode === 'light' ? 'black' : 'white',
                border: props.mode === 'light' ? '1px solid black' : '1px solid white'
              }} />
            <button className="btn btn-outline-dark" type="submit"
              style={{
                color: props.mode === 'light' ? 'white' : 'white'
                , backgroundColor: props.mode === 'light' ? 'black' : '#0b2c4f', border: 'none'
              }}>
              Search
            </button>

          </form>

          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault" />
            <label className="form-check-label" htmlFor="switchCheckDefault" >Enable Dark Mode</label>
          </div>
        </div>
      </nav>
    </>
  );
}
//PropTypes --> It is used to check the type of props that are passed to a component. It is a way to ensure that the props that are passed to a component are of the correct type. It is also used to check if the required props are passed to a component or not.
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  homeText: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  contactText: PropTypes.string.isRequired,
};

//DefaultPropTypes --> It is used to set the default values for the props that are passed to a component. It is a way to ensure that the props that are passed to a component have a default value if they are not passed by the parent component.
// Navbar.defaultProps = {
//   title: " Title Here",
//   homeText: " Home Text ",
//   aboutText: " About Text ",
//   contactText: " Contact Text",
// };

export default Navbar;

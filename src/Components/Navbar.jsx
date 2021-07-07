import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid header fixed-top">
        <div className="row py-2 d-flex">
          {/* <!-- Logo --> */}
          <div className="col-md-2 col-4 mx-auto align-items-md-end logo">
            <NavLink to="/">
              <img src={Logo} alt="Flipkart" title="Flipkart" />
            </NavLink>
          </div>

          {/* <!-- Search Box --> */}
          <div className="col-md-4 col-10 mx-auto search dropdown bg-white">
            <input
              className="form-control dropdown-toggle"
              type="search"
              placeholder="Search for products, brands and more"
              aria-label="Search"
              id="navbarDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
            />
            <i className="fa fa-search ml-sm-1 text-primary"></i>
            <div
              className="dropdown-menu col-12 search-item"
              aria-labelledby="navbarDropdown"
            >
              <h6 className="ml-4">Discover More</h6>
              <div className="dropdown-divider"></div>
              <NavLink className="dropdown-item py-2" to="/">
                <i className="fa fa-search text-secondary mr-3"></i>mobiles
              </NavLink>
              <NavLink className="dropdown-item py-2" to="/">
                <i className="fa fa-search text-secondary mr-3"></i>t-shirts
              </NavLink>
              <NavLink className="dropdown-item py-2" to="/">
                <i className="fa fa-search text-secondary mr-3"></i>shoes
              </NavLink>
              <NavLink className="dropdown-item py-2" to="/">
                <i className="fa fa-search text-secondary mr-3"></i>laptop
              </NavLink>
              <NavLink className="dropdown-item py-2" to="/">
                <i className="fa fa-search text-secondary mr-3"></i>tv
              </NavLink>
              <NavLink className="dropdown-item py-2" to="/">
                <i className="fa fa-search text-secondary mr-3"></i>sarees
              </NavLink>
            </div>
          </div>

          {/* <!-- Login --> */}
          <div className="col-md-2 col-4 dropdown login">
            <button
              className="btn bg-white text-primary"
              type="button"
              id="loginMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              Login
            </button>
            <div className="dropdown-menu login-list col-12 aria-labelledby=">
              <div className="d-flex px-3 py-2">
                <h6 className="ml-md-1" id="new-cust">
                  New Customer?
                </h6>
                <NavLink to="/" className="ml-auto mr-2" id="signUp">
                  Sign Up
                </NavLink>
              </div>
              <div className="dropdown-divider"></div>
              <BtnLink img="fa fa-user-circle" name="My Profile" />
              <div className="dropdown-divider"></div>
              <BtnLink img="fa fa-plus" name="Flipkart Plus Zone" />
              <div className="dropdown-divider"></div>
              <BtnLink img="fa fa-book" name="Orders" />
              <div className="dropdown-divider"></div>
              <BtnLink img="fa fa-heart" name="Wishlist" />
              <div className="dropdown-divider"></div>
              <BtnLink img="fa fa-id-card" name="Rewards" />
              <div className="dropdown-divider"></div>
              <BtnLink img="fa fa-gift" name="Gift Cards" />
            </div>
          </div>

          {/* <!-- More --> */}
          <div className="col-md-2 col-4 dropdown more d-flex justify-content-center">
            <NavLink
              className="btn dropdown-toggle text-white ml-lg-2 ml-sm-0"
              to="/"
              role="button"
              id="moreMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              More
            </NavLink>
            <div
              className="dropdown-menu more-list"
              aria-labelledby="moreMenuLink"
            >
              <BtnLink img="fa fa-bell" name="Notification Preferences" />
              <div className="dropdown-divider"></div>
              <BtnLink img="fa fa-archive" name="Sell On Flipkart" />
              <div className="dropdown-divider"></div>
              <BtnLink img="fa fa-question-circle" name="24x7 Customer Care" />
              <div className="dropdown-divider"></div>
              <BtnLink img="fa fa-arrows" name="Advertise" />
              <div className="dropdown-divider"></div>
              <BtnLink img="fa fa-download" name="Download App" />
            </div>
          </div>

          {/* <!-- Cart --> */}
          <div className="col-md-2 col-4 d-flex justify-content-md-start justify-content-center">
            <i
              className="fa fa-shopping-cart text-white mt-2"
              aria-hidden="true"
            ></i>
            <NavLink to="/" className="btn text-white">
              Cart
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

const BtnLink = (props) => {
  return (
    <>
      <div className="d-flex">
        <i
          className={`${props.img} text-primary ml-3 mt-2`}
          aria-hidden="true"
        ></i>
        <NavLink className="dropdown-item hvr" to="/">
          {props.name}
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;

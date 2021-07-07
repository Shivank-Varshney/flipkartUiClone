import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="container-fluid">
        <div className="row">
          <div className="col ml-md-3 Footer">
            <h6>ABOUT</h6>
            <div>
              <NavLink to="/">Contact Us</NavLink>
              <NavLink to="/">About Us</NavLink>
              <NavLink to="/">Careers</NavLink>
              <NavLink to="/">Flipkart Stories</NavLink>
              <NavLink to="/">Press</NavLink>
              <NavLink to="/">Flipkart Wholesale</NavLink>
            </div>
          </div>
          <div className="col Footer">
            <h6>HELP</h6>
            <div>
              <NavLink to="/">Payments</NavLink>
              <NavLink to="/">Shipping</NavLink>
              <NavLink to="/">Cancellation & Returns</NavLink>
              <NavLink to="/">FAQ</NavLink>
              <NavLink to="/">Report Infringement</NavLink>
            </div>
          </div>
          <div className="col Footer">
            <h6>POLICY</h6>
            <div>
              <NavLink to="/">Return Policy</NavLink>
              <NavLink to="/">Term of Use</NavLink>
              <NavLink to="/">Security</NavLink>
              <NavLink to="/">Privacy</NavLink>
              <NavLink to="/">Sitemap</NavLink>
              <NavLink to="/">EPR Compliance</NavLink>
            </div>
          </div>
          <div className="col Footer">
            <h6>SOCIAL</h6>
            <div>
              <NavLink to="/">Facebook</NavLink>
              <NavLink to="/">Twitter</NavLink>
              <NavLink to="/">YouTube</NavLink>
            </div>
          </div>
          <div className="col Footer border-left border-secondary">
            <h6>Mail Us:</h6>
            <div>
              <p>Flipkart Internet Private Limited,</p>
              <p>Buildings Alyssa, Begonia &</p>
              <p>Clove Embassy Tech Village,</p>
              <p>Outer Ring Road, Devarabeesanahalli Village,</p>
              <p>Bengaluru, 560103,</p>
              <p>Karnataka, India</p>
            </div>
          </div>
          <div className="col Footer">
            <h6>Registered Office Address:</h6>
            <div>
              <p>Flipkart Internet Private Limited,</p>
              <p>Buildings Alyssa, Begonia &</p>
              <p>Clove Embassy Tech Village,</p>
              <p>Outer Ring Road, Devarabeesanahalli Village,</p>
              <p>Bengaluru, 560103,</p>
              <p>Karnataka, India</p>
              <p>CIN : U51109KA2012PTC066107</p>
              <p>
                Telephone:{" "}
                <NavLink to="/" className="text-primary">
                  1800 202 9898
                </NavLink>
              </p>
            </div>
          </div>
        </div>

        <div className="row border-top mt-5 py-3 border-secondary">
          <div className="col">
            <i className="fa fa-briefcase text-warning mr-2" aria-hidden="true"></i>
            <span>Sell On Flipkart</span>
          </div>
          <div className="col">
            <i className="fa fa-star text-warning mr-2" aria-hidden="true"></i>
            <span>Advertise</span>
          </div>
          <div className="col">
            <i className="fa fa-gift text-warning mr-2"></i>
            <span>Gift Cards</span>
          </div>
          <div className="col">
            <i className="fa fa-question-circle text-warning mr-2"></i>
            <span>Help Center</span>
          </div>
          <div className="col col-md-2 col-xs-4">
            <span>&copy; 2007-2021 Flipkart.com</span>
          </div>
          <div className="col col-md-5 col-xs-6">
            <img
              className="img-fluid"
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_69e7ec.svg"
              alt="footer cards"
            />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

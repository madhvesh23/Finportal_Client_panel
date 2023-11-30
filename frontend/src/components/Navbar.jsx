import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/homepage.css";
import logo from "./Assets/logo_finportal-removebg-preview3.png";
import Logout  from "../components/context/Navbar";
import { useFirebase } from "./context/firebaseContext";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
 const firebase = useFirebase();
  const handleOpenMenu = () => {
    setIsMenuActive(true);
  };

  const handleCloseMenu = () => {
    setIsMenuActive(false);
  };
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [isSolid, setIsSolid] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSolid(true);
      } else {
        setIsSolid(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //   for active link

  return (
    <>
      <header
        className={`cust-nav ${isSolid ? "cust-nav-solid" : ""}`}
        id="masthead"
        // itemscope="itemscope"
        // itemtype="https://schema.org/WPHeader"
      >
        <p className="main-title bhf-hidden" itemProp="headline">
          <a
            href="https://templatekit.jegtheme.com/pajax"
            title="Pajax – Tax Advisor &amp; Financial Consulting Elementor Template Kit"
            rel="home"
          >
            Pajax – Tax Advisor &amp; Financial Consulting Elementor Template
            Kit
          </a>
        </p>
        <div
          data-elementor-type="wp-post"
          data-elementor-id="12"
          className="elementor elementor-12"
        >
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-094e4e8 elementor-section-content-middle elementor-hidden-phone elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="094e4e8"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-no">
              <div
                className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-5b5a714"
                data-id="5b5a714"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-50655ce jkit-social-shape shape-none elementor-widget elementor-widget-jkit_social_share"
                    data-id="50655ce"
                    data-element_type="widget"
                    data-widget_type="jkit_social_share.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="jeg-elementor-kit jkit-social-share jeg_module_6__64e45de6e5bd1">
                        <ul className="social-share-list">
                          <li
                            className="elementor-repeater-item-5296611"
                            data-social="facebook"
                          >
                            <a
                              href="https://www.facebook.com/finsightventure/"
                              className="facebook social-icon"
                            >
                              <i
                                aria-hidden="true"
                                className="fab fa-facebook-f"
                              ></i>
                            </a>
                          </li>
                          <li
                            className="elementor-repeater-item-bb89b77"
                            data-social="twitter"
                          >
                            <a
                              href="https://twitter.com/finportal_in"
                              className="twitter social-icon"
                            >
                              <i aria-hidden="true" className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li
                            className="elementor-repeater-item-02fa9fd"
                            data-social="pinterest"
                          >
                            <a
                              href="https://www.linkedin.com/company/finportalin/"
                              className="pinterest social-icon"
                            >
                              <i className="fa-brands fa-linkedin"></i>
                            </a>
                          </li>
                          <li
                            className="elementor-repeater-item-b2dad61"
                            data-social="linkedin"
                          >
                            <a
                              href="https://instagram.com/finportal_in"
                              className="linkedin social-icon"
                            >
                              <i
                                aria-hidden="true"
                                className="fab fa-instagram"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-4c09b76"
                data-id="4c09b76"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-48f45f5 elementor-icon-list--layout-inline elementor-align-right elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                    data-id="48f45f5"
                    data-element_type="widget"
                    data-widget_type="icon-list.default"
                  >
                    <div className="elementor-widget-container">
                      <ul className="elementor-icon-list-items elementor-inline-items">
                        <li className="elementor-icon-list-item elementor-inline-item">
                          <span className="elementor-icon-list-icon">
                            <i
                              aria-hidden="true"
                              className="fas fa-map-marker-alt"
                            ></i>{" "}
                          </span>
                          <span className="elementor-icon-list-text">
                            217-218 Rajhans Olympia, Bhatar, Surat, Gujarat,
                            India
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-268ea4d"
                data-id="268ea4d"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-4c05b86 elementor-icon-list--layout-inline elementor-align-right elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                    data-id="4c05b86"
                    data-element_type="widget"
                    data-widget_type="icon-list.default"
                  >
                    <div className="elementor-widget-container">
                      <ul className="elementor-icon-list-items elementor-inline-items">
                        <li className="elementor-icon-list-item elementor-inline-item">
                          <span className="elementor-icon-list-icon">
                            <i aria-hidden="true" className="fas fa-envelope"></i>{" "}
                          </span>
                          <span className="elementor-icon-list-text">
                            info@finportalin.com
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-1855ff1 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="1855ff1"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-no">
              <div
                className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-9ed0e46"
                data-id="9ed0e46"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-891d1cd elementor-widget elementor-widget-image"
                    data-id="891d1cd"
                    data-element_type="widget"
                    data-widget_type="image.default"
                  >
                    <div className="elementor-widget-container">
                      {/* <img width="800" height="206" src="wp-content/uploads/sites/111/2021/06/pajax-logo-6-1024x264.png" className="attachment-large size-large wp-image-3989" alt="" decoding="async" loading="lazy" srcset="https://templatekit.jegtheme.com/pajax/wp-content/uploads/sites/111/2021/06/pajax-logo-6-1024x264.png 1024w, https://templatekit.jegtheme.com/pajax/wp-content/uploads/sites/111/2021/06/pajax-logo-6-300x77.png 300w, https://templatekit.jegtheme.com/pajax/wp-content/uploads/sites/111/2021/06/pajax-logo-6-768x198.png 768w, https://templatekit.jegtheme.com/pajax/wp-content/uploads/sites/111/2021/06/pajax-logo-6-1536x395.png 1536w, https://templatekit.jegtheme.com/pajax/wp-content/uploads/sites/111/2021/06/pajax-logo-6-2048x527.png 2048w, https://templatekit.jegtheme.com/pajax/wp-content/uploads/sites/111/2021/06/pajax-logo-6-800x206.png 800w, https://templatekit.jegtheme.com/pajax/wp-content/uploads/sites/111/2021/06/pajax-logo-6-e1626234217274.png 1920w" sizes="(max-width: 800px) 100vw, 800px" />*/}

                      <img
                        src={logo}
                        width="800"
                        height="206"
                        className="attachment-large size-large wp-image-3989 nav-logo"
                        alt=""
                        decoding="async"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-7210dc9"
                data-id="7210dc9"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-232813c elementor-widget elementor-widget-jkit_nav_menu"
                    data-id="232813c"
                    data-element_type="widget"
                    data-widget_type="jkit_nav_menu.default"
                  >
                    <div className="elementor-widget-container">
                      <div
                        className="jeg-elementor-kit jkit-nav-menu break-point-tablet submenu-click-title jeg_module_6_1_64e45de704ab4"
                        data-item-indicator='&lt;i aria-hidden="true" className="fas fa-angle-down"&gt;&lt;/i&gt;'
                      >
                        <button
                          className="jkit-hamburger-menu"
                          onClick={handleOpenMenu}
                        >
                          <i aria-hidden="true" className="fas fa-bars"></i>
                        </button>
                        {/* <div className="jkit-menu-wrapper"> */}
                        <div
                          className={`jkit-menu-wrapper ${
                            isMenuActive ? "active" : ""
                          }`}
                        >
                          <div className="jkit-menu-container">
                            <ul
                              id="menu-menu-1"
                              className="jkit-menu jkit-menu-direction-flex jkit-submenu-position-top"
                            >
                              <li
                                id="menu-item-6132"
                                className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-6132`}
                              >
                                <NavLink to="/" onClick={handleCloseMenu}>
                                  Home
                                </NavLink>
                              </li>
                              <li
                                id="menu-item-6132"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6132"
                              >
                                <NavLink to="/itr" onClick={handleCloseMenu}>
                                  Services
                                </NavLink>
                              </li>
                              <li
                                id="menu-item-6131"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6131"
                              >
                                <NavLink
                                  to="/contact"
                                  onClick={handleCloseMenu}
                                >
                                  Contact Us
                                </NavLink>
                              </li>
                              <li
                                id="menu-item-114"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-114"
                              >
                                <NavLink
                                  className="nav-dropdown-opcl"
                                  to="#"
                                  onClick={handleDropdownToggle}
                                >
                                  Account
                                </NavLink>
                                <ul
                                  className={`sub-menu ${
                                    isDropdownOpen ? "dropdown-open" : ""
                                  }`}
                                >
                                  
                                    {!firebase.isUser && <>
                                      <li
                                    id="menu-item-6133"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6133"
                                  >
                                      <NavLink
                                      to="/signin"
                                      onClick={handleCloseMenu}
                                    >
                                      Signin
                                    </NavLink>
                                    </li>
                                    </>}
                                    
                                  
                                  
                                    {!firebase.isUser && <>
                                      <li
                                    id="menu-item-6134"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6134"
                                  >
                                      <NavLink
                                      to="/signup"
                                      onClick={handleCloseMenu}
                                    >
                                      Signup
                                    </NavLink>
                                    </li>
                                    </>}
                                    
                                  
                                  <li
                                    id="menu-item-6134"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6134"
                                  >
                                   
                                     {firebase.isLoggedIn && <Logout/>}
                                  
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                          <div className="jkit-nav-identity-panel">
                            <div className="jkit-nav-site-title">
                              <a
                                href="https://templatekit.jegtheme.com/pajax"
                                className="jkit-nav-logo"
                              ></a>
                            </div>
                            <button
                              className="jkit-close-menu"
                              onClick={handleCloseMenu}
                            >
                              <i aria-hidden="true" className="fas fa-times"></i>
                            </button>
                          </div>
                        </div>
                        <div className="jkit-overlay"></div>
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </header>
    </>
  );
};

export default Navbar;

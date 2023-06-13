import { Link } from "react-router-dom";
import Counter from "./Counter.jsx";
import { useEffect } from 'react';


export default function () {

    // Inside your React component
    useEffect(() => {


       
    }, []);

    return <>
        <div id="wrapper">

            <div id="top-bar" className="text-center dark" style={{ backgroundColor: '#15888a' }}>
                <p className="mb-0 text-white" style={{ fontSize: '14px' }}>
                    Holisticly cultivate multifunctional quality vectors after Mobile SDK.
                    <a href="#" className="ms-2 font-primary fw-bold text-white"><u>Learn More</u> &#8250;</a>
                </p>
            </div>

            <header id="header" className="full-header transparent-header dark" data-sticky-class="not-dark" data-responsive-class="not-dark">
                <div id="header-wrap">
                    <div className="container">
                        <div className="header-row">

                            {/* Logo */}
                            <div id="logo">
                                <a href="index.html">
                                    <img className="logo-default" srcSet="src/templates/images/logo.png, src/templates/images/logo@2x.png 2x" src="src/templates/images/logo@2x.png" alt="Canvas Logo" />
                                    <img className="logo-dark" srcSet="src/templates/images/logo-dark.png, src/templates/images/logo-dark@2x.png 2x" src="src/templates/images/logo-dark@2x.png" alt="Canvas Logo" />
                                </a>
                            </div>

                            <div className="header-misc">
                                <a href="#" className="button bg-white text-dark button-light button-rounded color">Sign Up</a>
                            </div>

                            <div className="primary-menu-trigger">
                                <button className="cnvs-hamburger" type="button" title="Open Mobile Menu">
                                    <span className="cnvs-hamburger-box"><span className="cnvs-hamburger-inner"></span></span>
                                </button>
                            </div>

                            {/* Primary Navigation */}
                            <nav className="primary-menu with-arrows">
                                <ul className="menu-container">
                                    <li className="menu-item current"><a className="menu-link" href="#"><div>Home</div></a></li>
                                    <li className="menu-item mega-menu"><a className="menu-link" href="#"><div>Hosting</div></a>
                                        <div className="mega-menu-content mega-menu-style-2 border-top-0 not-dark">
                                            <div className="container">
                                                <div className="row">
                                                    <ul className="sub-menu-container mega-menu-column col-lg-3">
                                                        <li className="menu-item">
                                                            <div className="widget">
                                                                <div className="feature-box not-dark fbox-center mb-0">
                                                                    <div className="fbox-icon mb-4">
                                                                        <img src="src/templates/demos/hosting/images/svg/web.svg" className="rounded-0 bg-transparent text-start" alt="Image" style={{ width: '52px' }} />
                                                                    </div>
                                                                    <div className="fbox-content">
                                                                        <h3 className="fw-medium"><a href="#">Web Hosting</a></h3>
                                                                        <p className="d-none d-lg-block mb-0 fw-light">Is a type of Internet hosting service that allows individuals and organizations to make their website accessible via the World Wide Web.</p>
                                                                        <a href="#" className="btn btn-link mt-2 color p-0">Learn More &#8250;</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    {/* Remaining sub-menu-container elements */}
                                                    <ul className="sub-menu-container mega-menu-column col-lg-3">
                                                        <li className="menu-item">
                                                            <div className="widget">
                                                                <div className="feature-box not-dark fbox-center mb-0">
                                                                    <div className="fbox-icon mb-4">
                                                                        <img src="src/templates/demos/hosting/images/svg/cloud.svg" className="rounded-0 bg-transparent text-start" alt="Image" style={{ width: '52px' }} />
                                                                    </div>
                                                                    <div className="fbox-content">
                                                                        <h3 className="fw-medium"><a href="#">Cloud Hosting</a></h3>
                                                                        <p className="d-none d-lg-block mb-0 fw-light">The major benefit cloud hosting offers over shared hosting is that it allows you to utilize the resources of multiple servers.</p>
                                                                        <a href="#" className="btn btn-link mt-2 color p-0">Learn More &#8250;</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <ul className="sub-menu-container mega-menu-column col-lg-3">
                                                        <li className="menu-item">
                                                            <div className="widget">
                                                                <div className="feature-box not-dark fbox-center mb-0">
                                                                    <div className="fbox-icon mb-4">
                                                                        <img src="src/templates/demos/hosting/images/svg/dedicated.svg" className="rounded-0 bg-transparent text-start" alt="Image" style={{ width: '52px' }} />
                                                                    </div>
                                                                    <div className="fbox-content">
                                                                        <h3 className="fw-medium"><a href="#">Dedicated Hosting</a></h3>
                                                                        <p className="d-none d-lg-block mb-0 fw-light">Dedicated server or managed hosting service is a type of Internet hosting in which the client leases an entire server not shared with anyone.</p>
                                                                        <a href="#" className="btn btn-link mt-2 color p-0">Learn More &#8250;</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <ul className="sub-menu-container mega-menu-column col-lg-3">
                                                        <li className="menu-item">
                                                            <div className="widget">
                                                                <div className="feature-box not-dark fbox-center mb-0">
                                                                    <div className="fbox-icon mb-4">
                                                                        <img src="src/templates/demos/hosting/images/svg/shared.svg" className="rounded-0 bg-transparent text-start" alt="Image" style={{ width: '52px' }} />
                                                                    </div>
                                                                    <div className="fbox-content">
                                                                        <h3 className="fw-medium"><a href="#">Shared Hosting</a></h3>
                                                                        <p className="d-none d-lg-block mb-0 fw-light">Shared Web Hosting service refers to a web hosting service where many websites reside on one web server connected to the Internet.</p>
                                                                        <a href="#" className="btn btn-link mt-2 color p-0">Learn More &#8250;</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="menu-item"><a className="menu-link" href="#"><div>Services</div></a></li>
                                    <li className="menu-item"><a className="menu-link" href="#"><div>Domains</div></a></li>
                                    <li className="menu-item"><a className="menu-link" href="#"><div>FAQs</div></a></li>
                                    <li className="menu-item"><a className="menu-link" href="#"><div>Contact</div></a></li>
                                </ul>
                            </nav>

                        </div>
                    </div>
                </div>
                <div className="header-wrap-clone"></div>
            </header>



        </div>
    </>;
}
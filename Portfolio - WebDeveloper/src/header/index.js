import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermai = () => {
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
        document.body.classList.toggle("ovhidden");
    };

    return (
        <>
        <header className="fixed-top site__header">
            <div className="d-flex align-items-center justify-content-between">
                <Link className="navbar-brand nav_ac" to="/">
                    {logotext}
                </Link>
                <div className="d-flex align-items-center">
                    <Themetoggle />
                    <button className="menu__bottom nav_ac" onClick={handleToggle}>
                        {!isActive ? <VscClose /> : <VscGrabber />}
                    </button>
                </div>
                </div>
                <div className={`site_navigation ${!isActive ? "menu_opend" : ""}`}>
                    <div className="bg_menu h-100">
                        <div className="menu_wrapper">
                            <div className="menu_container p-3">
                                <ul className="the_menu">
                                    <li className="menu_item ">
                                        <Link onClick={handleToggle} to="/" className="my-3">HEM</Link>
                                    </li>
                                    <li className="menu_item">
                                        <Link onClick={handleToggle} to="/portfolio" className="my-3">PORTFOLIO </Link>
                                    </li>
                                    <li className="menu_item">
                                        <Link onClick={handleToggle} to="/about" className="my-3">OM</Link>
                                    </li>
                                    <li className="menu_item">
                                        <Link onClick={handleToggle} to="/kontakt" className="my-3">KONTAKT</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu-footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
                    <div className="d-flex">
                        <a href={socialprofils.facebook}>FACEBOOK</a>
                        <a href={socialprofils.github}>GITHUB</a>
                        <a href={socialprofils.twitter}>TWITTER</a>
                    </div>
                    <p className="copyright m-0">copyright _ {logotext}</p>
                    </div>

                </header>
                <div className="br-top"></div>
                <div className="br-bottom"></div>
                <div className="br-left"></div>
                <div className="br-right"></div>
                </>
    );
};

export default Headermain;
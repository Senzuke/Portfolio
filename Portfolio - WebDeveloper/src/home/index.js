import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <HelmetProvider>
            <section id="home" className="home">
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title> {meta.title} </title>
                    <meta name="description" content="{meta.description}" />
                </Helmet>
                <div className="intro_sec d-block d-lg-flex align-items-center ">
                    <div
                    className="h-bg-image order-1 order-lg-2 h-100 "
                    style={ { backgroundImage: `url($introdata.your_img_url`}}
                </div>
            </section>
        </HelmetProvider>
    )
}
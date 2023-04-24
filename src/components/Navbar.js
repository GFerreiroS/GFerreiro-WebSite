import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "../App.css"

export default function Navbar() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`bg-gray-800 md:sticky top-0 z-10 ${scrollPosition > 0 ? "navbar-show" : "navbar-hide"}`}>
            <div className="container flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link
                    to="scrollTop"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={700}
                    className="ml-3 text-xl">
                    Gabriel Ferreiro
                </Link>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    <Link
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={700}
                        className="mr-5 hover:text-white">
                        Past Work
                    </Link>
                    <Link
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={700}
                        className="mr-5 hover:text-white">
                        Skills
                    </Link>
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={700}
                        className="inline-flex items-center bg-gray-800 border-0 focus:outline-none rounded text-base mt-4 md:mt-0 hover:text-white">
                        Contact me
                    </Link>
                </nav>
            </div>
        </header>
    );
}

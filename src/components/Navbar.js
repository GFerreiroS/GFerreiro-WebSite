import React, { useState, useEffect } from "react";
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

    const handleClick = (e) => {
        e.preventDefault();
        const href = e.target.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;

        window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
        });
    }

    return (
        <header className={`bg-gray-800 md:sticky top-0 z-10 ${scrollPosition > 0 ? "navbar-show" : "navbar-hide"}`}>
            <div className="container flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href="#about" className="ml-3 text-xl" onClick={handleClick}>
                    Gabriel Ferreiro
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    <a href="#projects" className="mr-5 hover:text-white" onClick={handleClick}>
                        Past Work
                    </a>
                    <a href="#skills" className="mr-5 hover:text-white" onClick={handleClick}>
                        Skills
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex items-center bg-gray-800 border-0 focus:outline-none rounded text-base mt-4 md:mt-0 hover:text-white" onClick={handleClick}>
                        Contact me
                    </a>
                </nav>
            </div>
        </header>
    );
}

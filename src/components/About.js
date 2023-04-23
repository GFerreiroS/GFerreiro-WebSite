import React from "react";
import Typewriter from "typewriter-effect";
import CV from "../CV/CV.pdf"

export default function About() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    return (
        <section id="about" className={`flex${!isMobile ? " h-screen" : ""}`}>
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-5 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Gabriel!
                        <br className="hidden lg:inline-block" />
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 70,
                                strings: ["Web Dev", "Full-Stack Dev", "Tech Enthusiast",]
                            }}
                        />
                    </h1>
                    <p className="mb-8 leading-relaxed text-xl">
                        As a former restaurant worker turned web developer,
                        I bring a unique blend of skills to the table.
                        I have expertise in various web technologies and a keen eye for design,
                        along with the ability to work well under pressure,
                        communicate effectively, and collaborate with diverse teams.
                        I am excited to apply my skills and experience to create innovative solutions for your company.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href={CV}
                            download="Gabriel_Ferreiro_CV.pdf"
                            target="_blank"
                            className="inline-flex text-white bg-green-500 border-0 py-4 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded-full"
                        alt="hero"
                        src="./Me.jpeg"
                    />
                </div>
            </div>
        </section>
    );
}

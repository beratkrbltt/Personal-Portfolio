import '../css/Hero.css'

import { FaGithub, FaLinkedin } from "react-icons/fa";
import pp from "../images/pp.webp";
import { HiArrowUpRight } from 'react-icons/hi2';

function Hero() {
    return (
        <>
            <header className="hero-main">
                <div className="hero-text">
                    <span className="hero-badge">
                        <span className="hero-badge-dot" />
                        Ordu, Türkiye · Open to opportunities
                    </span>

                    <h1 className="hero-heading">
                        Frontend Developer
                        <em>crafting clean,</em>
                        interactive experiences.
                    </h1>

                    <p className="hero-desc">
                        I'm Berat Karabulut — a frontend developer focused on building fast, responsive, and user-friendly web experiences. I enjoy turning ideas and designs into clean, interactive interfaces with modern web technologies.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">
                            View Projects <HiArrowUpRight />
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            Contact Me
                        </a>
                    </div>

                    <div className="hero-social">
                        <a href="https://github.com/beratkrbltt" target="_blank" rel="noreferrer">
                            <FaGithub /> GitHub
                        </a>
                        <span className="hero-social-sep">|</span>
                        <a href="https://www.linkedin.com/in/berat-karabulut-2791bb277/?isSelfProfile=true" target="_blank" rel="noreferrer">
                            <FaLinkedin /> LinkedIn
                        </a>
                    </div>
                </div>

                <div className="hero-visual">
                    <span className="corner corner-tl" />
                    <span className="corner corner-br" />

                    <img src={pp} className="hero-photo" alt="Profil fotoğrafı" />

                    <div className="hero-stat">
                        <span className="hero-stat-number">20+</span>
                        <span className="hero-stat-label">Projects</span>
                    </div>

                    <div className="hero-code">
                        <p>
                            <span className="tok-kw">const</span>{' '}
                            <span className="tok-var">passion</span> ={' '}
                            <span className="tok-str">'UI craftsmanship'</span>
                        </p>
                        <p className="tok-comment">// build with intention</p>
                    </div>
                </div>
            </header>
        </>

    )
}

export default Hero
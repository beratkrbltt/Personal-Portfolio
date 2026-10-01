import '../css/About.css'

function About() {
    return (
        <section className="about-sec">
            <div className="about-sec-copy">

                <span className="eyebrow">
                    <span className="eyebrow-tag">01</span>
                    <span className="eyebrow-line" />
                    ABOUT
                </span>

                <h2 className="about-sec-heading">
                    Where logic meets <em>design.</em>
                </h2>

                <p className="about-sec-text">
                    I like turning ideas into interfaces that feel
                    <span className="hl"> simple</span>,
                    <span className="hl"> intentional</span>, and easy to use.
                    For me, good frontend work is about more than making
                    things look right — it's about making every interaction
                    feel natural.
                </p>

                <p className="about-sec-text">
                    I enjoy working where
                    <span className="hl"> design</span> meets
                    <span className="hl"> development</span>, from building
                    reusable components to refining the small details that
                    make an interface feel polished.
                </p>

            </div>

            <div className="stat-card">
                <div className="stat-cell">
                    <span className="stat-number">01</span>
                    <span className="stat-label">Design Mindset</span>
                </div>

                <div className="stat-cell">
                    <span className="stat-number">02</span>
                    <span className="stat-label">Clean Code</span>
                </div>

                <div className="stat-cell">
                    <span className="stat-number">03</span>
                    <span className="stat-label">Attention to Detail</span>
                </div>

                <div className="stat-cell">
                    <span className="stat-number">&infin;</span>
                    <span className="stat-label">Always Learning</span>
                </div>
            </div>
        </section>
    )
}

export default About
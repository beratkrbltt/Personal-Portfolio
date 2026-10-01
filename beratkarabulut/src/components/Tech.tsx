import '../css/Tech.css'
import { techStack } from '../data/techStack'


function Tech() {
    return (
        <section className="tech-sec">
            <div className="tech-sec-copy">
                <span className="eyebrow">
                    <span className="eyebrow-tag">02</span>
                    <span className="eyebrow-line" />
                    TECH STACK
                </span>

                <h2 className="tech-sec-heading">
                    The tools I build <em>with</em>.
                </h2>
            </div>
            <div className="tech-groups">
                {techStack.map((group) => (
                    <div className="tech-group" key={group.label}>
                        <span className="tech-group-label">
                            {group.label}
                        </span>

                        <div className="tech-pills">
                            {group.items.map((item) => (
                                <span
                                    key={item}
                                    className={`pill pill-${group.variant}`}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Tech

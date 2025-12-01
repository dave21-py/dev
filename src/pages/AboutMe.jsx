import { Link } from 'react-router-dom'
import './AboutMe.css'

function AboutMe() {
    return (
        <div className="page-container">
            <div className="page-header">
                <Link to="/" className="back-link">← back to main page</Link>
            </div>

            <div className="content">
                <h1>About Me</h1>
                <p className="date">December 1, 2024</p>

                <div className="bio">
                    <p>
                        I'm David. I like training models and working on interesting projects.
                    </p>

                    <p>
                        This portfolio is built to showcase my work and share what I'm passionate about.
                    </p>

                    <p>
                        Currently seeking internships and opportunities to grow as a developer.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe

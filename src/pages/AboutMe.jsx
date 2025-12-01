import { Link } from 'react-router-dom'
import './Page.css'

function AboutMe() {
    return (
        <div className="page-container">
            <div className="page-header">
                <Link to="/" className="back-link">← back to main page</Link>
            </div>

            <div className="content">
                <h1>David Geddam</h1>
                <p className="date">December 1, 2025</p>

                <div className="bio">
                    <p>
                        I'm David. a current cs major, and working on interesting projects.
                    </p>

                    <p>
                        ever since, i was a kid, i fell in love with computers, wanted to learn how they would work under the hood, and in the recent months, fell in interest in artificial intelligence.
                    </p>


                    <p>
                        currently seeking internships and relevant opportunities to grow.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe

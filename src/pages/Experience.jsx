import { Link } from 'react-router-dom'
import './Page.css'

function Experience() {
    return (
        <div className="page-container">
            <div className="page-header">
                <Link to="/" className="back-link">← back to main page</Link>
            </div>

            <div className="content">
                <h1>Experience</h1>
                <p className="date">December 1, 2025</p>

                <div className="bio">
                    <p>
                        Currently seeking internships and opportunities to grow as a developer.
                    </p>

                    <h3>Education</h3>
                    <p>
                        Computer Science Major - Add your university and graduation year here.
                    </p>

                    <h3>Skills</h3>
                    <p>
                        List your technical skills here: Python, JavaScript, React, Machine Learning, etc.
                    </p>

                    <h3>Work Experience</h3>
                    <p>
                        Add any relevant work experience, internships, or volunteer work here.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Experience

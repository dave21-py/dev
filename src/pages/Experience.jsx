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
                <p className="date">December 3, 2025</p>

                <div className="bio">
                    <p>
                        I am seeking internships btw....
                    </p>

                    <h3>Work Experience</h3>
                    <p>
                        Audio Visual Technician - 05/25-08/25.
                    </p>
                    <p>
                        Training Assistant, Arduino Programming - 06/25-07/25.
                    </p>

                    {/* <h3>Skills</h3>
                    <p>
                        List your technical skills here: Python, JavaScript, React, Machine Learning, etc.
                    </p> */}

                    <h3>Education</h3>
                    <p>
                        <a href="https://www.bju.edu/" target="_blank" rel="noopener noreferrer" className="external-link">
                            Bob Jones University - 08/23- exp. 05/27
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Experience

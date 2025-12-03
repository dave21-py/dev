import { Link } from 'react-router-dom'
import './Page.css'

function OtherSites() {
    return (
        <div className="page-container">
            <div className="page-header">
                <Link to="/" className="back-link">← back to main page</Link>
            </div>

            <div className="content">
                <h1>Links</h1>


                <div className="bio">
                    <p>
                        Find me on other platforms:
                    </p>

                    <h3>Resume</h3>
                    <p>
                        <a href="https://dave21-py.github.io/1/david_resumee.pdf" target="_blank" rel="noopener noreferrer" className="external-link">
                            View Resume
                        </a>
                    </p>

                    <h3>GitHub</h3>
                    <p>
                        <a href="https://github.com/dave21-py" target="_blank" rel="noopener noreferrer" className="external-link">
                            github.com/dave21-py
                        </a>
                    </p>

                    <h3>LinkedIn</h3>
                    <p>
                        <a href="https://linkedin.com/in/david-geddam" target="_blank" rel="noopener noreferrer" className="external-link">
                            linkedin.com/in/david-geddam
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OtherSites

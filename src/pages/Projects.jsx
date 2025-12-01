import { Link } from 'react-router-dom'
import './Page.css'

function Projects() {
    return (
        <div className="page-container">
            <div className="page-header">
                <Link to="/" className="back-link">← back to main page</Link>
            </div>

            <div className="content">
                <h1>Projects</h1>
                <p className="date">December 1, 2025</p>

                <div className="bio">
                    <p>
                        Here are some of the projects I've worked on:
                    </p>

                    <h3>Project 1</h3>
                    <p>
                        Description of your first project goes here. What technologies did you use? What problem did it solve?
                    </p>

                    <h3>Project 2</h3>
                    <p>
                        Description of your second project. Add links, technologies, and any interesting details.
                    </p>

                    <h3>Project 3</h3>
                    <p>
                        Another project description. Feel free to add more projects as needed.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Projects

import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
    return (
        <div className="container">
            <div className="header">
                <h1>hi, i'm david. i like training models. mostly code and videos.</h1>
                <p>you're probably here for one of these things...</p>
            </div>

            <div className="links">
                <Link to="/about" className="link-box">
                    <h2>me</h2>
                    <p className="subtitle">little bit about myself :)</p>
                </Link>

                <Link to="/projects" className="link-box">
                    <h2>projects</h2>
                    <p className="subtitle">stuff that i worked on</p>
                </Link>

                <Link to="/experience" className="link-box">
                    <h2>experience</h2>
                    <p className="subtitle">currently seeking internships</p>
                </Link>

                <Link to="/other-sites" className="link-box">
                    <h2>other links</h2>
                    <p className="subtitle">resume, github, linkedin</p>
                </Link>
            </div>
        </div>
    )
}

export default Home

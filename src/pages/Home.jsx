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
                    <p className="subtitle">little bit about myself:)</p>
                </Link>

                <div className="link-box">
                    <h2>projects</h2>
                    <p className="subtitle">stuff that i worked on</p>
                </div>

                <div className="link-box">
                    <h2>experience</h2>
                    <p className="subtitle">currently seeking internships</p>
                </div>

                <div className="link-box">
                    <h2>other sites</h2>
                    <p className="subtitle">resume, github, linkedin</p>
                </div>
            </div>
        </div>
    )
}

export default Home

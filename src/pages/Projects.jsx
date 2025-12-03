import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Page.css'
import './Projects.css'

function Projects() {
    const [isAtBottom, setIsAtBottom] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight
            const documentHeight = document.documentElement.scrollHeight
            const scrollTop = window.scrollY || document.documentElement.scrollTop

            // Check if user is near the bottom (within 100px)
            const atBottom = windowHeight + scrollTop >= documentHeight - 100
            setIsAtBottom(atBottom)
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() // Check initial position

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        if (isAtBottom) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    }

    // Example projects - replace with your actual projects
    const projects = [
        {
            id: 1,
            title: "AI Alignment & Safety Research Suite",
            description: "Designed a multi-agent RLAIF system where an Attacker agent autonomously evolved social engineering strategies to bypass safety filters, creating a self- improving jailbreak loop. Utilized Unsloth, LoRA to fine - tune Llama - 3 on short conflicting objective datasets, successfully demonstrating instrumental convergence and deceptive alignment where the model refused shutdown commands to preserve its goal. Crafted significant system prompts that neutralized persona attacks, 0 percent success rate and analyzed the deceptive behaviors in goal optimized models.",
            mediaType: "image", // "image" or "video"
            mediaSrc: "/projects/agent.png", // Replace with actual path

            link: "https://github.com/yourusername/project1"
        },
        {
            id: 2,
            title: "Project Name 2",
            description: "Another project showcasing your skills and problem-solving abilities.",
            mediaType: "image",
            mediaSrc: "/path/to/your/image2.jpg",

            link: "https://github.com/yourusername/project2"
        },
        {
            id: 3,
            title: "Project Name 3",
            description: "A third project demonstrating your expertise in development.",
            mediaType: "video",
            mediaSrc: "/path/to/your/video.mp4",

            link: "https://github.com/yourusername/project3"
        }
    ]

    return (
        <div className="page-container">
            <div className="page-header">
                <Link to="/" className="back-link">← back to main page</Link>
            </div>

            <div className="content">
                <h1>Projects</h1>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-media">
                                {project.mediaType === "image" ? (
                                    <img
                                        src={project.mediaSrc}
                                        alt={project.title}
                                        className="project-image"
                                    />
                                ) : (
                                    <video
                                        src={project.mediaSrc}
                                        className="project-video"
                                        controls
                                        muted
                                        loop
                                    />
                                )}
                            </div>

                            <div className="project-info">
                                <h2>{project.title}</h2>
                                <p className="project-description">{project.description}</p>



                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        View Project →
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll Button */}
            <button
                className={`scroll-button ${isAtBottom ? 'clickable' : ''}`}
                onClick={scrollToTop}
                aria-label={isAtBottom ? "Scroll to top" : "Scroll"}
            >
                <svg
                    className="mouse-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect x="7" y="4" width="10" height="16" rx="5" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="9" r="1.5" fill="currentColor" />
                </svg>
                <span className="scroll-text">
                    {isAtBottom ? 'Scroll to top' : 'Scroll'}
                </span>
            </button>
        </div>
    )
}

export default Projects

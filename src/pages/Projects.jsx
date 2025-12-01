import { Link } from 'react-router-dom'
import './Page.css'
import './Projects.css'

function Projects() {
    // Example projects - replace with your actual projects
    const projects = [
        {
            id: 1,
            title: "Project Name 1",
            description: "Brief description of what this project does and the technologies used.",
            mediaType: "image", // "image" or "video"
            mediaSrc: "/path/to/your/image.jpg", // Replace with actual path
            tags: ["React", "Node.js", "MongoDB"],
            link: "https://github.com/yourusername/project1"
        },
        {
            id: 2,
            title: "Project Name 2",
            description: "Another project showcasing your skills and problem-solving abilities.",
            mediaType: "image",
            mediaSrc: "/path/to/your/image2.jpg",
            tags: ["Python", "Machine Learning", "TensorFlow"],
            link: "https://github.com/yourusername/project2"
        },
        {
            id: 3,
            title: "Project Name 3",
            description: "A third project demonstrating your expertise in development.",
            mediaType: "video",
            mediaSrc: "/path/to/your/video.mp4",
            tags: ["JavaScript", "API", "Docker"],
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

                                <div className="project-tags">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="tag">{tag}</span>
                                    ))}
                                </div>

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
        </div>
    )
}

export default Projects

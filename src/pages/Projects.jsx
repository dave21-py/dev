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
            mediaSrc: `${import.meta.env.BASE_URL}projects/agent.png`,

            link: "https://github.com/dave21-py/llm-safety-research"
        },
        {
            id: 2,
            title: "Adversarial Vision Attack",
            description: "Experimented an adversarial attack pipeline targeting famous computer vision architecture ResNet-50 to expose critical failures in deep neural networks. Implemented gradient-based perturbation algorithms, specifically Fast Gradient Sign Method (FGSM) and Iterative FGSM. Successfully generated 'silent' adversarial examples that forced the model to hallucinate a Chihuahua with 100% confidence from an input that remained identical to a Giant Panda. This experiment demonstrated the dangerous distinction between human perception and tensor operations, highlighting severe vulnerabilities in autonomous systems reliant on unverified visual inputs.",
            mediaType: "image", // "image" or "video"
            mediaSrcs: [
                `${import.meta.env.BASE_URL}projects/panda_noise_fgsm.png`,
                `${import.meta.env.BASE_URL}projects/panda_silent_attack.png`
            ],

            link: "https://github.com/dave21-py/Adversarial-vision-hack"
        },
        {
            id: 3,
            title: "Tiny Siri - Edge-Optimized Intent Classification",
            description: "Tested a near high-performance intent classifier using a fine-tuned DistilBERT model, achieving 97% test accuracy by implementing a full data augmentation pipeline. Optimized the model for on-device deployment via PyTorch dynamic Quantization, reducing the memory footprint by 48% (255MB →132MB) while maintaining precision. Finally, deployed the inference pipeline to the web using Hugging Face Spaces and Streamlit.",
            mediaType: "video",
            mediaSrc: `${import.meta.env.BASE_URL}projects/siri.mp4`,

            link: "https://huggingface.co/spaces/dave21-py/tiny_siri_demo"
        },
        {
            id: 4,
            title: "BibleGPT",
            description: "Fine-tuned google's gemma-2-2B llm on the kjv dataset, to generate biblically-styled text, using natural language processing (NLP), transfer learning techniques, and parameter-Efficient Fine-Tuning (PEFT) with LoRA. Used a context aware system that dynamically injects biblical context (Book/Chapter) into the system prompt, enabling the llm to answer specific scriptural questions with near-high accuracy. Used AI-assisted coding for the entire frontend UI and successfully connected to a backend FastAPI Server that loads my saved fine-tuned model, from hugging face.",
            mediaType: "video",
            mediaSrc: `${import.meta.env.BASE_URL}projects/product.mp4`,

            link: "https://github.com/dave21-py/BibleGPT.git"
        },
        {
            id: 5,
            title: "Student Performance Prediction",
            description: "Developed a prod-ready machine learning pipeline to predict student test scores, handling the full lifecycle of a data science project, from data ingestion and transformation to model evaluation. Implemented a modular codebase in python that trains and compares multiple regression models (Random Forest, XGBoost, CatBoost) to select the best-performing algorithm.",
            mediaType: "video",
            mediaSrc: `${import.meta.env.BASE_URL}projects/student.mp4`,

            link: "https://github.com/dave21-py/mlproject"
        },
        {
            id: 6,
            title: "Cuatros- tetris inspired game built with JavaFX",
            description: "Designed a fully responsive UI with multiple controls and multiple screens, enhancing user engagement and gameplay experience. Collaborated with team members, on core game mechanics, frontend development and applied JavaFX GUI design, using OOD principles.",
            mediaType: "video",
            mediaSrc: `${import.meta.env.BASE_URL}projects/cuatros.mp4`,

            link: "https://github.com/dave21-py/Cuatros.git"
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
                                    // Check if project has multiple images
                                    project.mediaSrcs ? (
                                        <div className="project-media-grid">
                                            {project.mediaSrcs.map((src, index) => (
                                                <img
                                                    key={index}
                                                    src={src}
                                                    alt={`${project.title} - Image ${index + 1}`}
                                                    className="project-image"
                                                />
                                            ))}
                                        </div>
                                    ) : (
                                        <img
                                            src={project.mediaSrc}
                                            alt={project.title}
                                            className="project-image"
                                        />
                                    )
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

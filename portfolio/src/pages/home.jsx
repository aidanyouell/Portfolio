import './home.css'
import headshotImage from '../assets/DSC_0082.jpg'

export default function HomePage() {
    return (
        <div className="home-container">
            <div className="hero">
                <h1 className="name">Aidan Youell</h1>
                <p className="tagline">Frontend Developer & Creative Technologist</p>
                <p className="sub-sentence">Building beautiful, functional digital experiences</p>
                
                <div className="socials">
                    <a href="https://github.com/aidanyouell" target="_blank" rel="noopener noreferrer" className="social-button">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/aidanyouell/" target="_blank" rel="noopener noreferrer" className="social-button">
                        LinkedIn
                    </a>
                    <a href="mailto:youellaidan@gmail.com" className="social-button">
                        Email
                    </a>
                </div>
            </div>

            <div className="headshot-container">
                <img 
                    src={headshotImage}
                    alt="Aidan Youell headshot" 
                    className="headshot"
                />
            </div>
        </div>
    )
}
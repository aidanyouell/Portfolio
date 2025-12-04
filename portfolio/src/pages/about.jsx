import './about.css'
//import placeholder from ''
const placeholder = 'https://i.ytimg.com/vi/HXUHHGOFFMk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC40jidE99inQ8x2SKQhnOiqPhfEA';

export default function AboutPage() {
    return (
        <div className="about-container">
            <section className="intro section">
                <div className="content intro-content">
                    <h2>Hi — I'm Aidan</h2>
                    <p className="lead">
                        I’m Aidan, a Creative Technology & Design student with a love for clean 
                        typography, motion-driven visuals, and building thoughtful digital experiences. 
                        I’m drawn to work that blends creativity and problem-solving.
                    </p>
                </div>
            </section>

            <section className="section background">
                <div className="image">
                    <img src={placeholder} alt="background visual" />
                </div>
                <div className="content">
                    <h3>Background</h3>
                    <p>
                        I started out experimenting with web design and quickly fell in love
                        with building interactive things. Over the years I've worked across
                        different stacks and on a variety of projects, from simple sites to
                        complex single-page applications.

                        I started with a specific interest into clean visuals and quickly fell
                        in love with making interactive and enjoyable visual experiences. I've
                        worked with different programs and softwares from the Adobe suite to coding
                        in a variety of languages. Anything from motion design graphics to complex
                        single page applications.
                    </p>
                </div>
            </section>

            <section className="section inspiration">
                <div className="content">
                    <h3 id='inspire'>What Inspires Me</h3>
                    <ul className="inspiration-list">
                        <li>Clean graphical designs</li>
                        <li>Works with good craftsmanship</li>
                        <li>Well designed UI/UX experiences</li>
                        <li>Exploring generative & creative coding</li>
                    </ul>
                </div>
                <div className="image">
                    <img src={placeholder} alt="inspiration visual" />
                </div>
            </section>

            <section className="section skills reverse">
                <div className="content">
                    <h3>Skills</h3>
                    <p>Here are some of the technologies and tools I use regularly:</p>
                    <div className="skills-list">
                        <span>React</span>
                        <span>JavaScript (ES6+)</span>
                        <span>HTML & CSS</span>
                        <span>Vite</span>
                        <span>Node.js</span>
                        <span>TypeScript</span>
                        <span>Git</span>
                        <span>Design Systems</span>
                    </div>
                </div>
                <div className="image">
                    <img src={placeholder} alt="skills visual" />
                </div>
            </section>
        </div>
    )
}
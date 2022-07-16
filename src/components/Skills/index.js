import Header from '../Header'
import Footer from '../Footer'
import './index.css'

const Skills = () => (
    <div>
        <Header/>
        <div className='skill-box'>
            <h1 className='skills-header'>Skills :</h1>  
            <div className="skills-container">
                <div className="icon1">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" className="icon" alt="React" />
                    <h1 className="header">React Js</h1>
                </div>
                <div className="icon1">
                    <img src="https://mpng.subpng.com/20180425/jrw/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84e2a4242.1423638015246930701731.jpg" className= "icon" alt="Node js" />
                    <h1 className="header">Node Js</h1>
                </div>
                <div className="icon1">
                    <img  src="https://miro.medium.com/max/730/1*Jr3NFSKTfQWRUyjblBSKeg.png" className="icon" alt="ExpressJs" />
                    <h1 className="header">Express Js</h1>
                </div>
                <div className="icon1">
                    <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-html-img.png" className="icon" alt="HTML"/>
                    <h1 className="header">HTML</h1>
                </div>
                <div className="icon1">
                    <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-css-img.png" className="icon" alt="CSS"/>
                    <h1 className="header">CSS</h1>
                </div>
                <div className="icon1">
                    <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-js-img.png" className="icon" alt="JS" />
                    <h1 className="header">Js</h1>
                </div>
                <div className="icon1">
                    <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-bootstrap-img.png" className="icon" alt="Bootstrap" />
                    <h1 className="header">Bootstrap</h1>
                </div>
                <div className="icon1">
                    <img  src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="python" className="icon" />
                    <h1 className="header">Python</h1>
                </div>
                <div className="icon1">
                    <div className="sqlite-icon">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/97/Sqlite-square-icon.svg" className="icon" alt="sqlite" />
                    </div>
                    <h1 className="header">SQLite</h1>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
)

export default Skills
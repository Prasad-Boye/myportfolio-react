import EducationItem from '../EducationItem'
import Header from '../Header'
import Footer from '../Footer'
import ExperienceItem from '../ExperienceItem'
import './index.css'

const educationDetails = [
    { id:1,
    name: "B.Tech",
    school: "Raghu Engineering College",
    branch: "Mechancial",
    duration: "2014-2018",
    score: "76.26%",
    },
    { id:2,
    name: "Inter",
    school: "Narayana Junior College",
    branch: "MPC",
    duration: "2012-2014",
    score: "89.60%",
    },
    { id:3,
    name: "SSC",
    school: "Essar School",
    branch: "N/A",
    duration: "2011-2012",
    score: "9.3 GPA",
    }
]

const experience = [
    { id:"abc",
    role: "Bootcamp Trainee",
    company: "NxtWave Disruptive Technologies",
    duration: "DEC 2021 - Present",
    location: "Remote",
    about: ["Developed a Keen understanding of the Fundamentals of Programming with Python and querying with SQL.",
    "Learnt about developing new web components based on design specs and writing reusable & maintainable codes.",
    "Developed a basic understanding of maintaining version control using Git Hub repositories.",
    "Created impressive Static, Dynamic and Responsive Websites using JS, CSS3 and HTML5"]
    },
    { id:"bca",
    role: "Senior Design Engineer",
    company: "CC Engineers Pvt. Ltd.",
    duration: "JAN 2021 - MARCH 2022",
    location: "Hybrid-Pune",
    about: ["Trained four new trainees in job identification, drive management, report generation, system operations and project computational analysis." ,
    "Supervised the development of 3D maintenance procedures of all the systems in the Lucknow metro train - ALSTOM" ,
    "Led a team of four overseeing the design and development of the Doors & PA system simulator - ALSTOM",
    "Developed software flow logic for Auxiliary Electrical system Rail Simulator using excel. Presented a project proposal document at a client location that secured a contract worth 5cr for the company."]
    },
    { id:"cab",
    role: "Design Engineer",
    company: "CC Engineers Pvt. Ltd.",
    duration: "MAY 2019 - DEC 2020",
    location: "Hybrid-Pune",
    about: ["Designed the Train body, HVAC System and Fail-Safe Pneumatic Braking System for the Hubli smart toy train - Hubballi Dharwad Smart City Ltd.",
    "Designed and developed Auxiliary Electrical system Rail Simulator for Lucknow Metro - ALSTOM",
    "Handled two projects concurrently, analyzing the priority and project risks."]
    }
]
    


const Education = () => (
    <div>
        <Header/>
        <div className='edu-exp-container'>
            <div>
                <h1 className='exp-header'>Experience</h1>
                <ul className="exp-list">
                {
                    experience.map(eachItem => (<ExperienceItem key={eachItem.id} details={eachItem}/>))
                }</ul>
            </div>
            <div>
            <h1  className='exp-header'>Education</h1>
            <ul className="edu-list">
            {
                educationDetails.map(eachItem => (<EducationItem details={eachItem} key={eachItem.id}/>))
            }
            </ul>
            </div>
        </div>
        <Footer/>
    </div>
)

export default Education
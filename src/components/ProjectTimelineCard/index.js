import {AiFillCalendar} from 'react-icons/ai'
import {BiRightArrowAlt} from 'react-icons/bi'
import './index.css'

const ProjectTimelineCard = props => {
  const {details} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} = details
  return (
    <div>
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="project-title-duration">
        <h1>{projectTitle}</h1>
        <div className="project-duration">
          <AiFillCalendar />
          <p className="duration-text">{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl} className="project-link">
        Visit <BiRightArrowAlt className="arrow" />
      </a>
    </div>
  )
}

export default ProjectTimelineCard

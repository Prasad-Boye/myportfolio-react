import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {details} = props
  const {duration, courseTitle, description, tagsList} = details
  return (
    <div>
      <div className="course-title">
        <h1>{courseTitle}</h1>
        <div className="time">
          <AiFillClockCircle />
          <p className="time-value">{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <div className="tag-items">
        {tagsList.map(eachItem => (
          <p className="course-tag" key={eachItem.id}>
            {eachItem.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard

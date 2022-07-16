import './index.css'

const ExperienceItem = props => {
    const {details} = props
    const{role,company,duration,about,location} = details

    return (
        <li className="exp-item">
            <div className="exp-titles">
                <div>
                    <p className='exp-title'><span className="exp-higlight">Company :</span> {company}</p>
                    <p className='exp-title'><span className="exp-higlight">Role :</span> {role}</p>
                </div>
                <div>
                    <p className='exp-title'><span className="exp-higlight">Duration : </span>{duration}</p>
                    <p className='exp-title'><span className="exp-higlight">Location :</span> {location}</p>
                </div>
            </div>
            <ul className='experince-description'>
                {about.map(item=> (<li key={item} className='exp-point'>{item}</li>))}
            </ul>
        </li>
    )

}

export default ExperienceItem
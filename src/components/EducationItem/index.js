import './index.css'

const EducationItem = props => {
    const {details} = props
    const{name,school,branch,duration,score} = details

    return (
        <li className="education-list-item">
            <div className='school-year'>
                <h3>{school}</h3>
                <p>{duration}</p>
            </div>
            <div className='degree-score'>
                <div className='degree-branch'>
                    <p className='degree'>{name}</p>
                    <p className='branch'>{branch}</p>
                </div>
                <p className='score'>{score}</p>
            </div>
        </li>
    )

}

export default EducationItem
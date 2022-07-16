import {Link} from 'react-router-dom'
import './index.css'

const NavigationTextItem = props =>{
   const {details,getActiveSection,activeSectionId} = props
   const {pathUrl,content,id} = details

   const setActiveSection = () => getActiveSection(id)

   const classItem = activeSectionId === id ? "active-section" : ""

   return (
    <li className="nav-menu-item" onClick={setActiveSection}>
        <Link to={`${pathUrl}`} className={`nav-link ${classItem}`}>
            {content}
        </Link>
    </li>
   )
}

export default NavigationTextItem
import './index.css'
import Header from '../Header'

const NotFound = () => (
  <div>
    <Header/>
      <div className="not-found-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
          alt="not found"
          className="not-found-img"
        />
        <h1>Page not found</h1>
    </div>
  </div>
)

export default NotFound

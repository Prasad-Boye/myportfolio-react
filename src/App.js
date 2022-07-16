import {BrowserRouter, Route, Routes,Navigate} from 'react-router-dom'


import Home from './components/Home'
import Education from './components/Education'
import Skills from './components/Skills'
import TimelineView from './components/TimelineView'
import NotFound from './components/NotFound'


import './App.css'

const App = () => (
  <BrowserRouter>
  <Routes>
    <Route exact path="/" element={<Home/>}></Route>
    <Route exact path="/education" element={<Education/>} ></Route>
    <Route exact path="/skills" element={<Skills/>} ></Route>
    <Route exact path="/projects" element={<TimelineView/>}></Route>
    <Route path="*" element={<Navigate to="/" replace />}></Route>
  </Routes>
  </BrowserRouter>
)

export default App

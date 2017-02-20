import React, {PropTypes} from 'react'
//import {connect} from 'react-redux'
import { NavBar } from '../components/NavBar'

const App = ({nav, children}) => (
    <div>       
        <NavBar path={nav.pathname}/>
        {children}
    </div>
)
App.propTypes = {
    nav: PropTypes.object,
    children: React.PropTypes.element
}
export default App
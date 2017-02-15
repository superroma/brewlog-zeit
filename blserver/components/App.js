import React, {PropTypes} from 'react'
import { NavBar } from './NavBar'

const App = ({url, children}) => (
    <div>       
        <NavBar path={url? url.pathname: ""}/>
        {children}
    </div>
)
App.propTypes = {
    url: PropTypes.object,
    children: React.PropTypes.element
}
export default App
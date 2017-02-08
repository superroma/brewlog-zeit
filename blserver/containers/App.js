import React from 'react'
import { NavBar } from '../components/NavBar'

const App = ({url, children}) => (
    <div>       
        <NavBar path={url? url.pathname: ""}/>
        {children}
    </div>
)

export default App
import React from 'react'
import { NavBar } from './NavBar'

export default class App extends React.Component {
   render () {
        return (
            <div>       
                <NavBar path={this.props.url?this.props.url.pathname:""}/>
                {this.props.children}
            </div>
        )
    }
}
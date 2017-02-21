import React, {PropTypes} from 'react'
//import {connect} from 'react-redux'
import Head from 'next/head'
import { NavBar } from '../components/NavBar'

const App = ({nav, children}) => (
    <div className="container">       
        <Head>
            <meta charset="utf-8"/>
            <meta name="viewport" 
            content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <link rel="stylesheet" 
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" 
            />
        </Head>
        <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" ></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js"></script>
       <NavBar path={nav.pathname}/>
        {children}
    </div>
)
App.propTypes = {
    nav: PropTypes.object,
    children: React.PropTypes.element
}
export default App
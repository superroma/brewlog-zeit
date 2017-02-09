import React from 'react'
import App from '../containers/App'

const makePage = (Component) => (
    class PageWrapper extends React.Component {
        static async getInitialProps (ctx) {
            return {url: ctx.url}
        }
        constructor (props) {
            super(props)
            this.store = {}
        }
        render () {
            return (
                <App {...this.props}>
                    <Component {...this.props} />
                </App>
            )
        }
    }
)

export default makePage
import React from 'react'
import {Provider} from 'react-redux'
import { reducer, initStore} from '../store'
import App from '../containers/App'



const makePage = (Component) => (
    class PageWrapper extends React.Component {
        static async getInitialProps (ctx) {
            const isServer = !!ctx.req
            const store = initStore(reducer, null, isServer)
            return {
                initialState: store.getState(),
                isServer,
                url: ctx.url
            }
        }
        constructor (props) {
            super(props)
            this.store = initStore(reducer, props.initialState, props.isServer)
        }
        render () {
            return (
                <Provider store={this.store}>
                    <App {...this.props}>
                        <Component {...this.props} />
                    </App>
                </Provider>
            )
        }
    }
)

export default makePage
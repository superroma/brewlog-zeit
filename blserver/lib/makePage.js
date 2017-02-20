import React from 'react'
import {Provider} from 'react-redux'
import { reducer, initStore} from '../store'
import App from '../containers/App'



const makePage = (Component, getDataFunc) => (
    class PageWrapper extends React.Component {
        static async getData() {
            return getDataFunc? await getDataFunc(): {}
        }
        static async getInitialProps (ctx) {
            const isServer = !!ctx.req
            const initialState = {
                
            }
            //const store = initStore(reducer, initialState, isServer)
            
            return {
                initialState/*: store.getState()*/,
                isServer,
                nav: {pathname: ctx.url? ctx.url.pathname: ctx.pathname },
                data: await this.getData()
            }
        }
        constructor (props) {
            super(props)
            this.store = initStore(reducer, props.initialState, props.isServer)
        }
        render () {
            return (
                <Provider store={this.store}>
                    <App nav={this.props.nav}>
                        <Component {...this.props} />
                    </App>
                </Provider>
            )
        }
    }
)

export default makePage
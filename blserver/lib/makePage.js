import React from 'react'
import {Provider} from 'react-redux'
import { initStore } from '../store'
import { fetchData } from '../actions'
import reducer from '../reducers'
import App from '../containers/App'



const makePage = (Component, dataPath = '') => (
    class PageWrapper extends React.Component {
        static async getInitialProps (ctx) {
            const isServer = !!ctx.req
            const initialState = {
                data: {}
            }
            const store = initStore(reducer, initialState, isServer)
            if (dataPath != '') {
                await store.dispatch(fetchData(dataPath))
            }
            return {
                initialState: store.getState(),
                isServer,
                nav: {pathname: ctx.url? ctx.url.pathname: ctx.pathname },
                //data
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
                        <Component/>
                    </App>
                </Provider>
            )
        }
    }
)

export default makePage
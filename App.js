import React, { Component } from 'react'
import MainNavigation from './src/navigators/mainNavigation'
import { Provider } from 'react-redux'
import store from './src/publics/redux/store'
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    )
  }
}

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../Modules/store'

import { Header, Footer } from './Layouts'
import Bookshelf from './Bookshelf'
import About from './About'

function App() {
  return (
    <main>
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Bookshelf} />
            <Route path="/book/:id" component={About} />
            <Route path='*' component={() => 'ERROR 404 NOT FOUND'} />
          </Switch>
          {/* <Footer /> */}
        </Router>
      </Provider>
    </main>
  )
}

export default App

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from "@material-ui/core/CssBaseline"
import store from '../Modules/store'

import { Header, Footer } from './Layouts'
import { theme } from './Styles'
import Bookshelf from './Bookshelf'
import About from './About'

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Bookshelf} />
            <Route path="/book/:id" component={About} />
            <Route path='*' component={() => 'ERROR 404 NOT FOUND'} />
          </Switch>
          {/* <Footer /> */}
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

export default App

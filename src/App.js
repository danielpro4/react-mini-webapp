import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import NoMatch from 'components/NoMatch'
import Home from './pages/Home'
import Details from './pages/Details'
import AppTitle from 'components/AppTitle'
import Config  from 'constants/config'
import './App.scss'

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <AppTitle title={Config.appTitle} />
                <Switch>
                    <Redirect exact from='/' to='/home/all' />
                    <Route path='/home/:lang?' component={Home} />
                    <Route path='/details/:owner/:repo' component={Details} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App

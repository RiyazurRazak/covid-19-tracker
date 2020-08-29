import React from 'react'
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Home from './Home'
import Precautions from './Precaution'


function App(){

    return (<div>
<Router>
    <Switch>  
    <Route exact path="/" component ={Home} />
    <Route exact path="/precautions" component ={Precautions} />
    </Switch>
</Router>

    </div>)
}

export default App;
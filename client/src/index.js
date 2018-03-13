import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ArtistPage from './ArtistPage';
import Home from './Home';

import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router , Route,Switch} from "react-router-dom";

export default class App extends React.Component{
    render(){
        return(
            <div>
                <Router>
                    <Switch>
                     <Route
                     path="/"
                     exact
                     component={Home}
                     />   
                    <Route 
                     
                     path="/:id" 
                     render={(props)=>{
                       return <ArtistPage  {...props}/> 
                    }}
                    />
                     
                     <Route
                        render={(props)=>{
                            return <h1>not found</h1> 
                        }}
                    />

                    </Switch>
                    </Router>
             </div>   
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();

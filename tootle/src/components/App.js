import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home';
const App = () => {
        return (
        <div>
            <div><BrowserRouter>
            <Route path="/" exact component={Home}/>
            </BrowserRouter>
            </div>
        </div> 
        );
}
 
export default App;
import React from 'react';
import {Router, Route} from 'react-router-dom';
import ListComments from './comments/ListComments';
import CreateComments from './comments/CreateComments';
import EditComments from './comments/EditComments';
import ShowComments from './comments/ShowComments';
import DeleteComments from './comments/DeleteComments';
import Header from './Header';
import history from '../history';
import HomeContent from './HomeContent';
const App = () => {
        return (
        <div className="ui container">
            <Router history = {history}>
            <div>
            <Header/>
            <Route path="/" exact component={HomeContent}/>
            <Route path="/" exact component={ListComments}/>
            <Route path="/comments/new" exact component={CreateComments}/>
            <Route path="/comments/edit" exact component={EditComments}/>
            <Route path="/comments/delete" exact component={DeleteComments}/>
            <Route path="/comments/show" exact component={ShowComments}/>
            </div>
            </Router>
        </div> 
        );
}
 
export default App;
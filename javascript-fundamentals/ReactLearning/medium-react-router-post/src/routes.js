import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import Users from './components/Users';
import TopicList from './components/TopicList';
import TopicDetails from './components/TopicDetails';

const Routes = (props) => {
    return (
    <div>
        <NavBar />
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/">
                <Redirect to="/home" />
            </Route>
            <Route exact path="/about" component={About} />
            <Route exact path="/topic" component={TopicList} />
            <Route path="/topic/:topicId" component={TopicDetails} />
            <Route path="/users/:username" component={Users} />
            <Route component={NoMatch}/>
        </Switch>
    </div>
    )
};

export default Routes;
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursePage';
import ManageCoursePage from './components/course/ManageCoursePage';

export default (
    <App>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/courses" component={CoursesPage} />
            <Route exact path="/course" component={ManageCoursePage} />
            <Route exact path="/course/:id" component={ManageCoursePage} />
        </Switch>        
    </App>
);

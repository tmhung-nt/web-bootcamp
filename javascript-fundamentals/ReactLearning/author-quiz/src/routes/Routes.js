import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthorQuiz from '../components/AuthorQuiz';
import AddAuthor from '../components/AddAuthor';

const Routes = (props) => {
    const authors = props;
    return (
        <BrowserRouter>         
            {/* <AuthorQuiz {...props}/>    */}
            <Switch>
                <Route exact path="/" render={
                    () => <AuthorQuiz {...props}/>
                } />
                <Route exact path="/addAuthor" render={
                    (props) => {
                        console.log(props);
                        return <AddAuthor addNewAuthor={authors.addNewAuthor} history={props.history} />
                    }
                } />
            </Switch>        
        </BrowserRouter>
    )
}

export default Routes;
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './src/Home';
import Form from './src/Components/Form';
import StudentList from './src/Components/StudentList';
import SignIn from "./src/Components/SignIn";



const MainApp = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/registerStudent' component={Form}/>
            <Route path='/StudentList' component={StudentList}/>
            <Route path='/SignIn' component={SignIn}/>
        </Switch>
    </main>
);

export default MainApp;
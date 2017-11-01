import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';

export default class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            email: '',
            password: ''
        }
    }

    render(){
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar title = "Login"/>
                        <TextField hintText="Enter your email"
                        floatingLabelText="Email"
                        onChange= {(event, newValue) => this.setState({
                            email:newValue})}/>
                        <br />
                        <TextField
                        type = "password"
                        hintText="Enter your password"
                        floatingLabelText="Password"
                        onChange={(event, newValue) => this.setState({password:newValue})}/>

                        <br/>
                        <RaisedButton label = "Submit" primary={true} style={style}
                        onClick={(event) => this.handleClick(event)}/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }

        handleClick(event) {
        var apiBaseUrl="http://localhost:8080/api/demoStudents/login?";
        var self = this;
        console.log(apiBaseUrl+"email="+this.state.email+"&password="+this.state.password);

        axios.post(apiBaseUrl+"email="+this.state.email+"&password="+this.state.password)
            .then(function (response) {
                console.log(response);
                console.log(response.status);
                if (response.status == 200 && response.data != "") {
                    console.log("LOGIN SUCCESSFUL");
                    alert("LOGIN SUCCESSFUL")

                } else if (response.data == "") {
                    console.log("Username and password dont match");
                    alert("email and password don't match")
                } else {
                    console.log("Email does not exist");
                    alert("username does not exist");
                }
            }).catch (function (error) {
                    console.log(error);

                });

            }
    }


const style = {
    margin: 15,
};
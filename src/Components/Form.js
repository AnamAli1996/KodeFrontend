import React from 'react'
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import axios from 'axios';
import {browserHistory} from 'react-router';

export default class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        };

        this.validate = () => {
            let isError = false;
            const errors = {
                firstNameError: "",
                lastNameError: "",
                emailError: "",
                passwordError: ""
            };

            if (this.state.firstName.length <= 0) {
                isError = true;
                errors.firstNameError = "First name can't be blank!";
            }

            if(this.state.email.indexOf("@") === -1){
                isError = true;
                errors.emailError ="Invalid email format!";
            }

            if(this.state.password.length < 7){
                isError = true;
                errors.passwordError = "Password must be more than 7 characters long!"
            }

            if (isError) {
                this.setState({
                 /*... is a spreading attribute */
                        ...this.state,
                        ...errors
                });
            }


            return isError;
        };


        this.change = e => {
            this.setState({
                [e.target.name]: e.target.value
            });
        };

        this.onSubmit = (event) => {
            event.preventDefault();
            this.props.onSubmit(this.state);
            const err = this.validate();
            if (!err) {
                //Clear the fields after submit
                this.setState({
                    firstName: "",
                    firstNameError: "",
                    lastName: "",
                    lastNameError: "",
                    email: "",
                    emailError: "",
                    password: "",
                    passwordError: ""
                })
            }
        }
    }


        render(){
            return (
                <form>
                    <TextField
                        name="firstName"
                        hintText="First name"
                        floatingLabelText="First name"
                        value={this.state.firstName}
                        onChange={e => this.change(e)}
                        errorText={this.state.firstNameError}
                        floatingLabelFixed
                    />
                    <br />
                    <br />

                    <TextField
                        name="lastName"
                        hintText="Last Name"
                        floatingLabelText="Last Name"
                        value={this.state.lastName}
                        onChange={e => this.change(e)}
                        errorText={this.state.lastNameError}
                        floatingLabelFixed
                    />

                    <br />
                    <br />

                    <TextField
                        name="email"
                        hintText="Email"
                        floatingLabelText="Email"
                        value={this.state.email}
                        errorText={this.state.emailError}
                        onChange={e => this.change(e)}
                        floatingLabelFixed
                    />


                    <br />
                    <br />

                    <TextField
                        name="password"
                        hintText="Password"
                        floatingLabelText="Password"
                        value={this.state.password}
                        onChange={e => this.change(e)}
                        errorText={this.state.passwordError}
                        type="password"
                        floatingLabelFixed
                    />

                    <br />
                    <br />


                    <RaisedButton label="Submit" onClick={event => this.handleEvent(event)} primary />
                </form>
            );
        }

    handleEvent(event) {

        var apiBaseUrl = "http://localhost:8080/api/demoStudents/add?";
        var self = this;
        var payload = {
            "email": this.state.email,
            "password": this.state.password
        }
        console.log(apiBaseUrl + "firstName=" + this.state.firstName + "&" +
            "lastName=" + this.state.lastName + "&" + "email=" + this.state.email + "&" + "&password=" + this.state.password + "&" + "level=Advanced");

        axios.post(apiBaseUrl + "firstName=" + this.state.firstName + "&" +
            "lastName=" + this.state.lastName + "&" + "email=" + this.state.email + "&" + "&password=" + this.state.password + "&" + "level=Advanced")
            .then(function (response) {
                console.log(response);
                console.log(response.status);
                if (response.status == 200) {
                    console.log("REGISTRATION SUCCESSFUL");
                    alert("registration successful!");
                    browserHistory.push("/StudentList")


                }
            }).catch(function (error) {
            console.log(error);

        });

    }
}
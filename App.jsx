import React, {Component} from "react";
import Form from './src/Components/Form';
import Header from './src/Components/Header';
import MainApp from './MainApp';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

    constructor() {
        super();

        this.state ={
            fields: {} //empty object
        };


        this.onSubmit = (fields) => {
            this.setState({fields});
        };
    }

    render(){
        return(
            <MuiThemeProvider>
            <div className="App">
                <Header />
                <MainApp />
            </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
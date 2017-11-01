import React from 'react';
import axios from 'axios';

export default class StudentList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            StudentList: []
        };

    }

    componentDidMount(){
        axios.get("http://localhost:8080/api/demoStudents/allStudents")
            .then(res => {
                const StudentList = res.data;
                console.log(StudentList);
                this.setState({StudentList});
            }
    )
    }

    render(){
        return(
            <div>
                <h1>Student List</h1>
                <ul>
                    {this.state.StudentList.map((student,i) =>
                        <dl key = {i}> <dt> student no = {student.id}</dt>
                            <dd> first Name = {student.firstName } </dd>
                            <dd>last Name =   {student.lastName }</dd>
                            <dd> email = {student.email}</dd>
                            <dd>date of birth = {student.dateOfBirth}</dd>
                            -------------------------------------------
                        </dl>
                    )}
                </ul>
            </div>
        );
    }

}


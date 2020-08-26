import React, {Component} from "react";
import axios from 'axios';

const Project = props => (
    <tr>
        <td>{props.project.projectName}</td>
        <td>{props.project.description}</td>
        <td>{props.project.date.substring(0,10)}</td>
    </tr>
)

export default class ProjectList extends Component{

    constructor(props){
        super(props);
        this.state = {projects:[]};
    }

    componentDidMount(){
        axios.get('http://localhost:5000/projects/')
        .then(response => {
            this.setState({projects: response.data})
        })
        .catch((error) =>{
            console.log(error);
        })
    }

    allProjectList(){
        return this.state.projects.map(currentProject => {
            return <Project project = {currentProject} key = {currentProject._id}/>
        })
    }

    render(){
        return(
            <div>
                <h3>Here are my Projects</h3>
                <table className ="table">
                    <thead className ="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Date</th>
           
                        </tr>
                    </thead>
                    <tbody>
                        {this.allProjectList()}
                    </tbody>
                </table>
            </div>

        )
    }
}
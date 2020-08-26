import React, {Component} from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class AddProject extends Component{

    constructor(props){
        super(props);

        this.onChangeProjectname =this.onChangeProjectname.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            projectName: '',
            description: '',
            date: new Date()
        }
    }

    onChangeProjectname(e){
        this.setState({
            projectName: e.target.value
        })
    }

    onChangeDescription(e){
        this.setState({
            description: e.target.value
        })
    }

    onChangeDate(date){
        this.setState({
            date: date
        })
    }



    onSubmit(e){
        e.preventDefault();
        const project = {
            projectName: this.state.projectName,
            description: this.state.description,
            date: this.state.date
        }
        console.log(project);

        axios.post('http://localhost:5000/projects/add', project)
            .then(res => console.log(res.data))
        
        this.setState({
            projectName: '',
            description: '',
            date: new Date()
        })

        window.location = '/';
    }

    render(){
        return(
            <div>
                <h3>Add a Project</h3>
                <form onSubmit ={this.onSubmit}>
                    <div className = "form-group">
                        <label>Name: </label>
                        <input  
                            type = "text"
                            required
                            className = "form-control"
                            value = {this.state.projectName}
                            onChange = {this.onChangeProjectname}
                        />
                    </div>
                    <div className ="form-group">
                        <label>Description: </label>
                        <input 
                            type = "text"
                            className = "form-control"
                            value = {this.state.description}  
                            onChange = {this.onChangeDescription}  
                        />
                    </div>
                    <div className = "form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker 
                                selected = {this.state.date}
                                onChange = {this.onChangeDate} />
                        </div>
                    </div>

                    <div className = "form-group">
                        <input type = "submit" value = "Create Project" className = "btn btn-primary" />
                    </div>
                </form>
            </div>

        )
    }
}
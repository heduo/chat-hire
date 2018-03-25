import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import { NavBar, Button, InputItem, TextareaItem } from 'antd-mobile';
import AvatarSelector from '../../components/AvatarSelector/AvatarSelector';
import {connect} from 'react-redux';
import {update} from '../../redux/user.redux';
import './RecruiterInfo.css';


@connect(
    state=>state.user,
    {update}
)
class RecruiterInfo extends Component {
    state = {
        title: '',
        company: '',
        salary: '',
        desc: '',
        avatar: ''
    };

    onChange = (key, val) => {
        this.setState({
            [key]:val
        })
    };

    selectAvatar = (val) => {
        this.setState({avatar: val})
    };
    render(){
        const currPath = this.props.location.pathname;
        return (
            <div>
                {/*// check if current path is the same as redirect path, if the same, then do not redirect*/}
                {this.props.redirectTo !== currPath ? <Redirect to={this.props.redirectTo}/> : null}
               <NavBar mode="dark">Recruiter Info</NavBar>
               <AvatarSelector selectAvatar={this.selectAvatar}></AvatarSelector>
               <InputItem onChange={val =>this.onChange('title', val)}>Hiring Position</InputItem>
               <InputItem onChange={val =>this.onChange('company', val)}>Company Name</InputItem>
               <InputItem onChange={val =>this.onChange('salary', val)}>Salary</InputItem>
               <TextareaItem
                   title = 'Job Description'
                   rows={3}
                   onChange={val =>this.onChange('desc', val)} />
               <Button
                   onClick = {()=>this.props.update(this.state)}
                   type='primary'>Save</Button>
           </div>
        )

    }
}

export default RecruiterInfo;
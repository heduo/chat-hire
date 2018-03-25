import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUserList} from "../../redux/chatuser.redux";
import UserCard from '../UserCard/UserCard';

@connect(state=>state.chatUser, {getUserList})
class Candidate extends Component {

    componentDidMount(){
        this.props.getUserList('recruiter'); // fetch recruiters info
    }

    render(){
        // show recruiters list
        return(<UserCard userList={this.props.userList}/>)

    }
}

export default Candidate;
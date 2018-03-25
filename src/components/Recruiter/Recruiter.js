import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUserList} from "../../redux/chatuser.redux";
import UserCard from '../UserCard/UserCard';

// connect to redux
@connect(
    state => state.chatUser,
    {getUserList}
    )
class Recruiter extends Component {

    state = {data: null};

    componentDidMount() {
        this.props.getUserList('candidate'); // fetch info of candidates
    }

    render() {
        // candidates list
        return (
            <div>
                <UserCard userList={this.props.userList}/>
            </div>

        )
    }
}

export default Recruiter;
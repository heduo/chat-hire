import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import { NavBar, Button, InputItem, TextareaItem } from 'antd-mobile';
import AvatarSelector from '../../components/AvatarSelector/AvatarSelector';
import {connect} from 'react-redux';
import {update} from '../../redux/user.redux';

@connect(
    state=>state.user,
    {update}
)
class CandidateInfo extends Component {

    state = {
        title: '',
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
                {this.props.redirectTo !== currPath ? <Redirect to={this.props.redirectTo}/> : null}
                <NavBar mode="dark">Candidate Info</NavBar>
                <AvatarSelector selectAvatar={this.selectAvatar}></AvatarSelector>
                <InputItem onChange={val =>this.onChange('title', val)}>Target Job</InputItem>

                <TextareaItem
                    title = 'About myself'
                    rows={3}
                    onChange={val =>this.onChange('desc', val)} />
                <Button
                    onClick = {()=>this.props.update(this.state)}
                    type='primary'>Save</Button>
            </div>
        )

    }
}

export default CandidateInfo;
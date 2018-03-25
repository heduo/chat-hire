import React, {Component} from 'react';
import Logo from '../../components/Logo/Logo';
import {List, InputItem, WingBlank, WhiteSpace, Button, Radio} from 'antd-mobile';
import {connect} from 'react-redux';
import {register} from '../../redux/user.redux';
import '../../config';
import {Redirect} from 'react-router-dom';
import BaseForm from '../../components/HOC/BaseForm/BaseForm';

import './Register.css';
import '../../index.css';

//connect to user redux
@connect(
    state => state.user, {register}
)

// wrap form with handleChange method
@BaseForm
class Register extends Component {

    componentDidMount() {
        this.props.handleChange('type', 'candidate'); // set default user to candidate
    }

    handleRegister = () => {
        this.props.register(this.props.state);
    };

    handleLogin = () => {
        this.props.history.push('/login'); // redirect to login page
    };

    render() {
        const RadioItem = Radio.RadioItem;
        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null}
                <Logo/>

                <WingBlank>
                    <List>
                        <List.Item><h3>Registration</h3></List.Item>
                        <p className="errorMsg">{this.props.msg}</p>
                        <InputItem
                            onChange={val => this.props.handleChange('user', val)}
                            placeholder="Input your username">Username</InputItem>
                        <WhiteSpace/>
                        <InputItem
                            onChange={val => this.props.handleChange('pwd', val)}
                            type="password" placeholder="Input your password">Password</InputItem>
                        <WhiteSpace/>
                        <InputItem
                            onChange={val => this.props.handleChange('repeatpwd', val)}
                            type="password" placeholder="Confirm password">Confirm Password</InputItem>
                        <WhiteSpace/>
                        <RadioItem
                            onClick={() => this.props.handleChange('type', 'candidate')}
                            checked={this.props.state.type === 'candidate'}>Candidate</RadioItem>
                        <RadioItem
                            onClick={() => this.props.handleChange('type', 'recruiter')}
                            checked={this.props.state.type === 'recruiter'}>Recruiter</RadioItem>
                    </List>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <Button onClick={this.handleRegister} type="primary">Register</Button>
                    <p style={{textAlign: 'center'}}>or</p>
                    <Button type="default" onClick={this.handleLogin}>Login</Button>
                    <WhiteSpace/>
                    <WhiteSpace/>
                </WingBlank>
            </div>
        );
    }
}

export default Register;
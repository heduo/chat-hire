import React, {Component} from 'react';
import Logo from '../../components/Logo/Logo';
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'; // Ant Design UI component
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../../redux/user.redux';
import './Login.css';
import BaseForm from '../../components/HOC/BaseForm/BaseForm'; // to wrap a component with handleChange method

//connect to user redux
@connect(
    state => state.user, {login}
)
@BaseForm //to Login component with handleChange method and attach input data (state) to props
class Login extends Component {

    handleLogin = () => {
        // dispatch login action to user reducer
        this.props.login(this.props.state);
    };

    handleRegister = () => {
        this.props.history.push('/register');
    };

    render() {
        return (
            <div>
                {this.props.redirectTo && this.props.redirectTo !== '/login' ?
                    <Redirect to={this.props.redirectTo}/> : null}
                <Logo/>

                <WingBlank>
                    <List>
                        <List.Item><h3>Login</h3></List.Item>
                        <InputItem
                            onChange={val => this.props.handleChange('user', val)}>Username</InputItem>
                        <InputItem
                            type="password"
                            onChange={val => this.props.handleChange('pwd', val)}>Password</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.handleLogin}>Login</Button>
                    <p style={{textAlign: 'center'}}>or</p>
                    <Button onClick={this.handleRegister} type="default">Register</Button>
                    <WhiteSpace/>
                    <WhiteSpace/>
                </WingBlank>
            </div>
        );
    }
}

export default Login;
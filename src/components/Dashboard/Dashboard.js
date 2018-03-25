import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {NavBar} from 'antd-mobile';
import NavLinkBar from '../NavLink/NavLink';
import Recruiter from '../Recruiter/Recruiter';
import Candidate from '../Candidate/Candidate';
import Login from '../../containers/Login/Login';
import User from '../User/User';
import Message from '../Message/Message';
import {getMsgList, recvMsg} from "../../redux/chat.redux";
import QueueAnim from 'rc-queue-anim';

// connect to redux
@connect(
    state => state,
    {getMsgList, recvMsg}
)
class Dashboard extends Component {
    // get
    componentDidMount() {
        if (!this.props.chat.chatMsg.length) {
            this.props.getMsgList();
            this.props.recvMsg();
        }

    }

    render() {
        const user = this.props.user; // get user info from user redux
        const pathname = this.props.location.pathname; // current pathname

        // nav items
        const navList = [
            {
                path: '/recruiter',
                text: 'Candidates',
                icon: 'users',
                title: 'Candidate List',
                component: Recruiter,
                hide: user.type === 'candidate'
            },
            {
                path: '/candidate',
                text: 'Recruiters',
                icon: 'users',
                title: 'Recruiter List',
                component: Candidate,
                hide: user.type === 'recruiter'
            },
            {
                path: '/msg',
                text: 'Message',
                icon: 'msg',
                title: 'Message List',
                component: Message,
            },
            {
                path: '/me',
                text: 'Me',
                icon: 'me',
                title: 'Personal Setting',
                component: User,
            },

        ];

        // try to match current path to nav items
        const currentPage = navList.find(v => v.path === pathname);

        // if current path can't match any nav item, then user is not auth, should redirect to login page
        if (currentPage === undefined) {
            return <Route path='/login' component={Login}/>;
        }
        // if current path match one of nav items, then render that component
        return (<div>
            <NavBar className='fixed-header' mode='dark'>{navList.find(value => value.path === pathname).title}</NavBar>
            <div style={{marginTop: 45}}>
                <QueueAnim delay={100} type="scaleX">
                    <Route key={currentPage.path} path={currentPage.path} component={currentPage.component}/>
                </QueueAnim>
            </div>
            <NavLinkBar data={navList}/> {/*Navbar on the bottom*/}
        </div>);
    }
}

export default Dashboard;
import React, {Component} from 'react';
import {Card, WhiteSpace, WingBlank} from 'antd-mobile';
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom';

@withRouter
class UserCard extends Component {
    static propTypes = {
        userList: PropTypes.array.isRequired
    };

    // go to chat page when a user is clicked
    handleClick = (v) => {
        this.props.history.push(`/chat/${v._id}`);
    };

    render() {
        const data = this.props.userList;
        return (
            <WingBlank>
                <WhiteSpace/>
                {/* show recruiters or candidates list*/}
                {data ? data.map(v => (
                    v.avatar ? (
                        <Card
                            key={v._id}
                            onClick={() => this.handleClick(v)}
                        >
                            <Card.Header
                                title={v.user}
                                thumb={require(`../../assets/images/avatars/${v.avatar}.svg`)}
                                extra={<span>{v.title}</span>}
                            />
                            {/*base on user type, show different user info*/}
                            <Card.Body>
                                {v.type === 'recruiter' ?
                                    <div>
                                        <span className="label">Company: </span><span>{v.company}</span>
                                    </div> : null}
                                {<span className="label">Description: </span>}{v.desc.split('\n').map(d => (
                                <div key={d}>{d}</div>
                            ))}
                                {v.type === 'recruiter' ?
                                    <div>
                                        <span className="label">Salary: </span><span>{v.salary}</span>
                                    </div>
                                    : null}
                            </Card.Body>
                        </Card>) : null

                )) : null}
            </WingBlank>
        );
    }
}

export default UserCard;
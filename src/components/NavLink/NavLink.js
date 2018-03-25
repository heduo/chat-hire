import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TabBar} from 'antd-mobile';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

@withRouter
@connect(
    state => state.chat, // to get unRead msg number
)
class NavLinkBar extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired
    };

    render() {
        // only show nav items that are for auth users
        const navList = this.props.data.filter(v => !v.hide);
        const pathname = this.props.location.pathname;
        // console.log(navList);
        return (
            <TabBar>
                {navList.map(
                    v => (
                        <TabBar.Item
                            badge={v.path === '/msg' ? this.props.unRead : 0}
                            key={v.path}
                            title={v.text}
                            icon={{uri: require(`../../assets/images/icons/${v.icon}.svg`)}}
                            selectedIcon={{uri: require(`../../assets/images/icons/${v.icon}Active.svg`)}}
                            selected={pathname === v.path}
                            onPress={() => {
                                this.props.history.push(v.path)
                            }}
                        />
                    )
                )
                }
            </TabBar>
        )
    }
}

export default NavLinkBar
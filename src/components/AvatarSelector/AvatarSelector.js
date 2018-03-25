import React, {Component} from 'react';
import {Grid, List} from 'antd-mobile';
import PropTypes from 'prop-types';
// import './AvatarSelector.css'

class AvatarSelector extends Component {
    static propTypes = {
        selectAvatar: PropTypes.func.isRequired
    };

    state = {

    };

    render(){
        // const avatarList = 'boy, bull, chick, crab, girl, hedgehog, hippopptamus, koala, lemur, man, pig, tiger, whale, zebra, woman'
          const avatarList ='assistant,astronaut,businessman,captain,cashier,chef,concierge,cooker,courier,croupier,detective,diver,doctor,engineer,farmer,firefighter,gentleman,journalist,judge,loader,maid,manager,miner,motorcyclist,nun,nurse,pilot,policeman,postman,priest,scientist,sheriff,showman,soldier,stewardess,surgeon,swat,taxi-driver,teacher,thief,waiter,welder,worker,writer'.split(',')
            .map(value => ({
                icon:require(`../../assets/images/avatars/${value}.svg`),
                text: value
            }));

          const gridHeader = this.state.icon
                                ? (<div>
                                    <span>Avatar selected </span>
                                    <img style={{width:20}} src={this.state.icon} alt={this.state.value}/>
                                  </div>)
                                : <div>Please select an avatar</div>;
        return (
            <div>
                <List  renderHeader = {()=>gridHeader}>
                    <Grid
                        activeClassName = 'activeAvatar'
                        onClick = { element => {
                            this.setState(element);
                            this.props.selectAvatar(element.text)
                        }}
                        data={avatarList}/>
                </List>

            </div>
        );
    }
}

export default AvatarSelector;
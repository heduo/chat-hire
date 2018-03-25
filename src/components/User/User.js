import React, {Component} from 'react';
import {connect} from 'react-redux';
import {List, Result, WhiteSpace, Modal, Button} from 'antd-mobile';
import browswerCookie from 'browser-cookies';
import {logoutSubmit} from "../../redux/user.redux";
import {Redirect} from 'react-router-dom';

@connect(state=>state.user, {logoutSubmit})
class User extends Component {

   constructor(props){
       super(props);
       this.logout = this.logout.bind(this);
   }

   logout(){
       const alert = Modal.alert;
       alert('Logout', 'Are you sure to logout ?', [
           { text: 'Cancel', onPress: () => console.log('cancel') },
           { text: 'Ok', onPress: () => {
               browswerCookie.erase('userid');
               this.props.logoutSubmit();

           } },
       ]);
      console.log('Log out');
   }

    render(){
        const  Props = this.props;
        const Item = List.Item;
        const Brief = Item.Brief;


        return (Props.user ? (
            <div>
                <Result
                    img={<img src={Props.avatar?require(`../../assets/images/avatars/${Props.avatar}.svg`):null} alt=""/>}
                    title = {Props.user}
                    message = {Props.type==='recruiter' ? Props.company : null}
                />
                <List renderHeader={()=>'Description'}>
                    <Item onClick={()=>console.log('diao')} multipleLine = {true}>
                        {Props.title}
                        {Props.desc.split('\n').map(v=><Brief key={v}>{v}</Brief>)}
                        {Props.salary ? <Brief>Salary: {Props.salary}</Brief>:null}
                        </Item>
                </List>
                <WhiteSpace></WhiteSpace>
                {/*<Item onClick={this.logout}>Logout</Item>*/}
                <Button type="default" onClick={this.logout}>Logout</Button>
            </div>
        ): <Redirect to={Props.redirectTo}/>);
    }
}

export default User;
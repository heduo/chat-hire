import React, {Component} from 'react';
import { connect } from 'react-redux';
import {List, Badge} from 'antd-mobile';

@connect(state=>state)
class Message extends Component {
    getLastMsg = (arr) => {
        return arr[arr.length-1];
    };
    render(){
        const Item = List.Item;
        const Brief = Item.Brief;
        const myId = this.props.user._id;
        const userInfos = this.props.chat.users;
        const msgGroup = {};
        console.log(this.props);
        this.props.chat.chatMsg.forEach(val=>{
            msgGroup[val.chat_id] = msgGroup[val.chat_id] || [];
            msgGroup[val.chat_id].push(val);
        });

        const chatList = Object.values(msgGroup).sort((a, b) => {
            const aLast = this.getLastMsg(a).create_time;
            const bLast = this.getLastMsg(b).create_time;
            return bLast - aLast;
        });
        console.log('chatList',chatList);
        return (
            <div>

                    {chatList.map(val => {
                        //console.log(val);
                        const lastItem = this.getLastMsg(val);
                        const talkToId = val[0].from === myId ? val[0].to : val[0].from;
                        const unreadNum = val.filter(val=>!val.read && val.to === myId).length;

                        if (!userInfos[talkToId]){ return null};

                        console.log('lastItem: ', lastItem);

                        return(
                            <List  key={lastItem._id}>
                                <Item
                                    extra = {<Badge text={unreadNum} />}
                                    thumb = {require(`../../assets/images/avatars/${userInfos[talkToId].avatar}.svg`)}
                                    arrow="horizontal"
                                    onClick = {()=>{
                                        this.props.history.push(`/chat/${talkToId}`);
                                    }}
                                >
                                    {lastItem.content}
                                    <Brief>
                                        {userInfos[talkToId].name}
                                    </Brief>
                                </Item>
                            </List>
                        )}
                        )}
            </div>
        )
    }
}

export default Message;
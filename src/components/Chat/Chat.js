import React, {Component} from 'react';
import {List, InputItem, NavBar, Icon, Grid} from 'antd-mobile';
import {connect} from 'react-redux';
import {getMsgList, sendMsg, recvMsg, readMsg} from "../../redux/chat.redux";
import {getChatId} from "../../util";
import QueueAnim from 'rc-queue-anim'; // animation component

// const socket =  io('ws://localhost:4000');

@connect(
    state => state,
    {getMsgList, sendMsg, recvMsg, readMsg}
)
class Chat extends Component {
    state = {
        text: '',
        msg: [],
        showEmoji: false
    };

    componentDidMount() {
        if (!this.props.chat.chatMsg.length) {
            this.props.getMsgList();
            this.props.recvMsg();
        }
        this.fixCarousel();
    }

    componentWillUnmount() {
        const to = this.props.match.params.user;
        this.props.readMsg(to);
    }

    handleSubmit = () => {

        const from = this.props.user._id;
        const to = this.props.match.params.user;
        const msg = this.state.text;
        this.props.sendMsg({from, to, msg});
        this.setState({text: ''});

    };

    // official solution to fix display problem
    fixCarousel = () => {
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'))
        }, 0)
    };

    render() {
        // console.log(this.props);
        const userid = this.props.match.params.user;
        const Item = List.Item;
        const users = this.props.chat.users;
        const chatId = getChatId(userid, this.props.user._id);
        if (!users[userid]) {
            return null
        }
        ;
        const chatMsgs = this.props.chat.chatMsg.filter(v => v.chat_id === chatId);

        const emoji = '😀 😃 😄 😁 😆 😅 😂 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 😏 😒 😞 😔 😟 😕 🙁 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 😭 😓 😪 😴 🙄 🤔 😬 🤐 😷 🤒 🤕 😈 👿 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 👍 👎 👊 ✊ 🤘 👌 👈 👉 👆 👇 ✋  🖐 🖖 👋  💪 🖕 ✍️  💅 🖖 💄 💋 👄 👅 👂 👃 👁 👀 '
            .split(' ')
            .filter(v => v)
            .map(v => ({text: v}));

        return (
            <div id='chat-page'>
                <NavBar
                    mode='dark'
                    icon={<Icon type="left"/>}
                    onLeftClick={() => {
                        this.props.history.goBack()
                    }}
                >
                    {users[userid].name}
                </NavBar>

                <QueueAnim type="scaleX">
                    {chatMsgs.map(val => {
                        const avatar = require(`../../assets/images/avatars/${users[val.from].avatar}.svg`);
                        return val.from === userid ? (
                            <List key={val._id}>
                                <Item
                                    thumb={avatar}
                                >
                                    {val.content}
                                </Item>
                            </List>
                        ) : (
                            <List key={val._id}>
                                <Item
                                    className='chat-me'
                                    extra={<img src={avatar} alt=""/>}
                                >{val.content}
                                </Item>
                            </List>
                        );
                    })}
                </QueueAnim>

                <div className="stick-footer">
                    {this.state.showEmoji ? <Grid
                        data={emoji}
                        columnNum={9}
                        carouselMaxRow={4}
                        isCarousel={true}
                        onClick={(el) => this.setState({text: this.state.text + el.text})}
                    /> : null}
                    <List>
                        <InputItem
                            placeholder='Please input message'
                            value={this.state.text}
                            onChange={v => {
                                this.setState({text: v})
                            }}
                            extra={
                                <div>
                                    <span
                                        role="img"
                                        aria-labelledby="emoji"
                                        style={{marginRight: 15}}
                                        onClick={() => {
                                            this.setState({showEmoji: !this.state.showEmoji});
                                            this.fixCarousel();
                                        }}
                                    >😀</span>
                                    <span onClick={this.handleSubmit}>Send</span>
                                </div>
                            }
                        />
                    </List>
                </div>
            </div>
        )
    }
}

export default Chat;
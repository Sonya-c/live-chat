import React from 'react';
import socketClient from "socket.io-client";
import dotenv from 'dotenv';

import Messange from './Messange';
import "../styles/Chat.css";

const SERVER = process.env.REACT_APP_SERVER_URL;
console.log("%cServer " + SERVER, "color: red");

class Chat extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            socket: null,
            input_value: '',
            messages: []
        }
    }
    componentDidMount() {
        this.configureSocket();
    }

    configureSocket = () => {
        var socket = socketClient(SERVER);

        socket.on('connection', () => {
            console.log("%cNew user conected!", "color: orange")
        });

        socket.on('message', message => {
            console.log("%cSend menssage!", "color: green");

            let messages = this.state.messages;
            messages.push(message);
            this.setState({ messages });
        });

        this.socket = socket;
    }

    send = () => {
        if (this.state.input_value && this.state.input_value !== '') {
            let text = this.state.input_value;

            this.socket.emit('send-message', {
                value: text,
                user_name: this.props.userName,
                date: new Date()
            });

            this.setState({ input_value: '' });
        }
    }

    handleInput = e => {
        this.setState({ input_value: e.target.value });
    }

    render() {
        return (
            <main className="chat-app">
                <div className="messange-zone">{
                    this.state.messages.map((item, index) => {
                        return <Messange
                            key={index}
                            date={item.date}
                            username={item.user_name}
                            text={item.value} />
                    })}
                </div>

                <div className="typing-zone">
                    <input type="text"
                        onChange={this.handleInput}
                        value={this.state.input_value} />
                    <button onClick={this.send}>Send</button>
                </div>
            </main>
        )
    }
}

export default Chat;
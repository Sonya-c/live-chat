import React, { useEffect, useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { SocketContext } from '../app/socket/Socekt';

import Messange from './Messange';
import "../styles/Chat.css";

export default function Chat() {
    const username = useSelector(state => state.auth.user_name);
    const [input_value, setValue] = useState("");
    const [messages, setMessange] = useState([]);
    const socket = useContext(SocketContext);

    useEffect(() => {
        socket.on('message', message => {
            console.log("%cGet menssage!", "color: green");
            setMessange([...messages, message]);
        });

        return () => {
            socket.off("message");
        };
    })

    function onClickHandle(event) {
        event.preventDefault();
        if (input_value && input_value !== '') {
            send(socket, input_value, username);
            setValue("");
        }
    }

    const send = (socket, messange, username) => {
        console.log("%cSend Messange!", "color: yellow")

        socket.emit('send-message', {
            value: messange,
            user_name: username,
            date: new Date()
        });
    }

    return (
        <main className="chat">
            <div className="messange-zone">{

                messages.map((item, index) => {
                    return <Messange
                        key={index}
                        date={item.date}
                        username={item.user_name}
                        text={item.value} />
                })}
            </div>

            <div className="typing-zone">

                <input type="text"
                    onKeyPress={(e) => e.key === 'Enter' ? onClickHandle(e) : null}
                    onChange={(e) => setValue(e.target.value)}
                    value={input_value} />

                <button onClick={(e) => onClickHandle(e)}>Send</button>
            </div>
        </main>
    )
}
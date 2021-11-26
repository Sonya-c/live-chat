import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { SocketContext } from '../app/socket/Socekt';

import Chat from '../componets/Chat';
import Chanels from '../componets/Chanels';
import '../styles/Parallel-txt.css'

export default function ParallelTxt() {
    const socket = useContext(SocketContext);
    const username = useSelector(state => state.auth.user_name);

    socket.auth = {
        username: username
    };

    socket.connect();

    return (
        <div className="parallel-txt">
            <Chat />
        </div>
    )
}
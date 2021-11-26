import React, { useEffect, useContext, useState } from 'react';
import { SocketContext } from '../app/socket/Socekt';

import '../styles/Chanels.css';

function ChanelUser({ name = "user", state = "none" }) {
    return (
        <div className="chanel user">
            <p className="name">{name}</p>
            <p className="state">{state}</p>
        </div>
    )
}

export default function Chanels() {
    const [chanels, setChanel] = useState([]);
    const socket = useContext(SocketContext);

    useEffect(() => {
        socket.on("users", users => {
            console.log("%cUsers", "color: pink");
            setChanel(users);
        });

        socket.on("user-connected", user => {
            setChanel([...chanels, user]);
        })

        socket.on("user-disconnected", user => {
            // Hacer algo
        })


    })

    return (
        <div className='chanels'> {
            chanels.map((item, index) => {
                console.log(item);
                return <ChanelUser
                    key={index}
                    name={item.username} />

            })} </div>
    )
}
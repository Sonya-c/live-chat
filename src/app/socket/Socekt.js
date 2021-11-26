import React from 'react';
import socketClient from "socket.io-client";

const SERVER = process.env.REACT_APP_SERVER_URL;

console.log("%cServer " + SERVER, "color: red");

export const socket = socketClient(SERVER, { autoConnect: false });
export const SocketContext = React.createContext();
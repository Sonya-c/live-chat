import React from 'react';
import { useSelector } from 'react-redux'

import Auth from './pages/Auth';
import Chat from './componets/Chat';

import "./styles/App.css"

export default function App() {
  const auth = useSelector(state => state.auth.value);
  const user_name = useSelector(state => state.auth.user_name);

  if (!auth) return (<Auth />);

  return (<Chat userName={user_name} />);
}

import React from 'react';
import { useSelector } from 'react-redux'

import Auth from './pages/Auth';
import Chat from './componets/Chat';

export default function App() {
  const auth = useSelector(state => state.auth.value);

  if (!auth) return (<Auth />);

  return (<Chat />);
}

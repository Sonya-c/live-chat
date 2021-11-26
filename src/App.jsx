import React from 'react';
import { useSelector } from 'react-redux';

import Auth from './pages/Auth';
import ParallelTxt from './pages/Parallel-txt';

import "./styles/App.css"

export default function App() {
  const auth = useSelector(state => state.auth.value);

  if (!auth) return <Auth />;
  else return <ParallelTxt />
}

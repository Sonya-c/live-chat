import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import changeTheme from '../app/features/themeSlide';

import Emoji from './Emoji';
import '../styles/ToogleTheme.css'

export default function ToogleTheme() {
    const dark = useSelector(state => state.theme.dark);
    const dispatch = useDispatch();

    function onClickHandle(event) {
        event.preventDefault();
        dispatch(changeTheme());
    }

    return (
        <button onClick={(e) => onClickHandle(e)} className={"toogle-theme " + (dark ? "dark" : "light")}>
            {dark ? <Emoji symbol="🌞" label="sun" /> : <Emoji symbol="🌙" label="sun" />}
        </button>
    )
}
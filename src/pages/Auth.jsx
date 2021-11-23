import React, { useState } from "react";
import { useDispatch } from 'react-redux'

import "../styles/Auth.css";
import { login } from "../app/features/auth/authSlide";

/**
 * Auth component
 */
export default function Auth() {
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    /**
     * Verify if name is not empty
     * @returns name.length
     */
    function validateForm() {
        return name.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(login(name));
    }

    return (
        <main className="login-page">
            <form className="login-form" onSubmit={handleSubmit}>

                <label
                    for="name">
                    Nombre
                </label>

                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <button
                    type="submit"
                    disabled={!validateForm()}>
                    Ingresar
                </button>

            </form>
        </main>
    );
}
import React, { useState } from "react";
import "../styles/Auth.css"

/**
 * Auth component
 */
export default function Auth() {
    const [name, setName] = useState("");

    /**
     * Verify if name is not empty
     * @returns name.length
     */
    function validateForm() {
        return name.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <main>
            <from className="login-form" onSubmit={handleSubmit}>

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

            </from>
        </main>
    );
}
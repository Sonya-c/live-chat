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
// lista de sala desplegable
       <form action="chat.html">
              <div class="form-control">
                <label for="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter username..."
                  required
                />
              </div>
              <div class="form-control">
                <label for="room">Room</label>
                <select name="room" id="room">
                  <option value="JavaScript">JavaScript</option>
                  <option value="Python">Python</option>
                  <option value="PHP">PHP</option>
                  <option value="C#">C#</option>
                  <option value="Ruby">Ruby</option>
                  <option value="Java">Java</option>
                </select>
              </div>
              <button type="submit" class="btn">Join Chat</button>
            </form>
                
                
            </form>
            </form>
        </main>
    );
}

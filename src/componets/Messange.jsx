import React from "react";

import "../styles/Messange.css";

const Messange = ({ date = new Date(), username = "", text }) => {
    return (<div className="messange">
        <div className="messange-header">
            <span className="messange-username">{username} </span>
            <span className="messange-date">
                {new Date(date).toDateString()} |
                <span> </span>
                {new Date(date).getHours()}:{new Date(date).getMinutes()}</span>
        </div>
        <div className="messange-conent">
            {text}
        </div>
    </div>
    );
}

export default Messange;
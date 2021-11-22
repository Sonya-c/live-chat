import React from "react";

const Messange = props => (
    <div className="messange">
        <div className="messange-header">
            <span className="messange-username">{props.username}</span>
            <date>{props.date}</date>
        </div>
        <div className="messange-conent">

        </div>
    </div>
);

export default Messange;
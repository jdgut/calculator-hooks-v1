import React from "react";

const Button = (props) => {
    const digit = props.buttonValue;
    const buttonHandler = props.buttonHandler;
    return (
        <>
            <button onClick={() => buttonHandler(digit)}>{digit}</button>
        </>
    )
}

export default Button;
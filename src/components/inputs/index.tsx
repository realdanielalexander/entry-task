import React from "react";
import InputProps from "./entities";

const Input = (props: InputProps) => {
    const { error, ...rest } = props;
    return (
        <div className="input__container">
            <div className="input__container-horizontal">
                <label style={{ width: "100%" }}>{props.label}</label>
                <input
                    className="input__input"
                    maxLength={24}
                    {...rest}
                ></input>
            </div>
            {error && <span className="input__error">{error}</span>}
        </div>
    );
};

export default Input;

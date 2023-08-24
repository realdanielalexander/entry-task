import { BaseButtonProps } from "./entities";
import React from "react";
const BaseButton = (props: BaseButtonProps) => {
    const { text, ...rest } = props;
    return (
        <button className="base-button" {...rest}>
            <div style={{ position: "relative" }}>
                <span style={{}}>{text}</span>
            </div>
        </button>
    );
};

export default BaseButton;

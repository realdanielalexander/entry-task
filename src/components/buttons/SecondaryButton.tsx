import { BaseButtonProps } from "./entities";
import React from "react";

const SecondaryButton = (props: BaseButtonProps) => {
    const { text, ...rest } = props;
    return (
        <button className="secondary-button" {...rest}>
            <div>
                <span style={{ fontWeight: "bold" }}>{text}</span>
            </div>
        </button>
    );
};

export default SecondaryButton;

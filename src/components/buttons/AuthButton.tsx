import { KeyOutlined } from "@ant-design/icons";
import React from "react";
import { AuthButtonProps } from "./entities";

const AuthButton = (props: AuthButtonProps) => {
    const { text, ...rest } = props;
    return (
        <button
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "transparent",
                borderRadius: "8px",
                boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.04)",
                border: 0,
                outline: 0,
                gap: 8,
                padding: 12,
                cursor: "pointer",
            }}
            {...rest}
        >
            <KeyOutlined style={{ color: "#F0502D" }} />
            <span>{text}</span>
        </button>
    );
};

export default AuthButton;

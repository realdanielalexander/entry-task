import React from "react";
import Image from "next/image";

const GoogleLoginButton = (props: JSX.IntrinsicElements["button"]) => {
    const { ...rest } = props;
    return (
        <button className="google-login-button" {...rest}>
            <div className="google-login-button__image">
                <Image width={32} height={32} src="./google.svg" alt="" />
            </div>
            <div className="google-login-button__text-container">
                <span className="google-login-button__text">
                    Sign in with Google
                </span>
            </div>
        </button>
    );
};

export default GoogleLoginButton;

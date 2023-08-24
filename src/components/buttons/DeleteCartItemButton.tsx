import React from "react";

const DeleteCartItemButton = (props: JSX.IntrinsicElements["button"]) => {
    const { ...rest } = props;
    return (
        <button className="delete-cart-item-button" {...rest}>
            <span style={{ color: "red", fontSize: "1.25rem" }}>-</span>
        </button>
    );
};

export default DeleteCartItemButton;

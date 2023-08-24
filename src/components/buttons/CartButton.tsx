import { ShoppingCartOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import React from "react";

const CartButton = ({ numberOfItems }: { numberOfItems: number }) => {
    const router = useRouter();
    return (
        <a role={"button"} style={{ position: "relative" }}>
            <ShoppingCartOutlined
                style={{ color: "grey", padding: 8, fontSize: "1.125rem" }}
                onClick={() => router.push("/cart")}
            />
            {numberOfItems ? (
                <div
                    style={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        borderRadius: 32,
                        width: 8,
                        height: 8,
                        aspectRatio: 1,
                        backgroundColor: "#F0502D",
                    }}
                ></div>
            ) : null}
        </a>
    );
};

export default CartButton;

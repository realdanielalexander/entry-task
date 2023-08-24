import useCartStore from "@/stores/cart";
import Image from "next/image";
import React from "react";
import DeleteCartItemButton from "../buttons/DeleteCartItemButton";
import { CartItemProps } from "./entities";
import { motion } from "framer-motion";
import { formatCurrency } from "@/utils/formatter";

const ProductCartItem = (props: CartItemProps) => {
    const deleteProduct = useCartStore((state) => state.deleteProduct);
    const { data, index } = props;

    return (
        <motion.div
            key={index}
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: 12,
                padding: 8,
                background: "#FFFFFF",
            }}
            exit={{ x: -300, opacity: 0 }}
        >
            <div style={{ display: "flex", alignItems: "center" }}>
                <div
                    style={{
                        aspectRatio: 1,
                        position: "relative",
                        backgroundColor: "#EFEFF2",
                        borderRadius: 12,
                        width: "80px",
                        height: "80px",
                    }}
                >
                    <Image
                        src={data.image}
                        alt="Product"
                        width={80}
                        height={80}
                    />
                </div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: 16,
                    }}
                >
                    <p style={{ margin: 0, fontSize: 12, color: "GrayText" }}>
                        {data.name}
                    </p>
                    <p
                        style={{
                            margin: 0,
                            marginTop: 4,
                            fontSize: 10,
                            fontWeight: "bold",
                        }}
                    >
                        {formatCurrency(data.price)}
                    </p>
                </div>
            </div>
            <DeleteCartItemButton onClick={() => deleteProduct(data.id)} />
        </motion.div>
    );
};

export default ProductCartItem;

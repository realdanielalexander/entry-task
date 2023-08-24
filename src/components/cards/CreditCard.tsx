import Image from "next/image";
import React from "react";
import { CreditCardProps } from "./entities";
import { motion } from "framer-motion";

const CreditCard = (props: CreditCardProps) => {
    const isFlipped = props.focused === "cvv";
    return (
        <motion.div
            style={{ position: "relative", transformStyle: "preserve-3d" }}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 1 }}
        >
            <div
                style={{
                    width: "335px",
                    height: "193px",
                    display: "flex",
                    position: "absolute",
                    flexDirection: "column",
                    backgroundColor: "#E84B38",
                    borderRadius: "30px",
                    transform: "rotateY(180deg)",
                    color: "#FFFFFF",
                }}
            >
                <Image src="overlay.svg" alt="overlay" fill />
                <div
                    style={{
                        marginTop: 36,
                        height: 40,
                        width: "100%",
                        backgroundColor: "black",
                    }}
                ></div>
                <div
                    style={{
                        marginLeft: 16,
                        marginTop: 16,
                        height: 28,
                        width: "75%",
                        backgroundColor: "white",
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "center",
                    }}
                >
                    <span style={{ marginRight: 12, color: "black" }}>
                        {props.data.cvv.split("").map(() => "*")}
                    </span>
                </div>
            </div>
            <div
                style={{
                    width: "335px",
                    height: "193px",
                    display: "flex",
                    position: "relative",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    backgroundColor: "#E84B38",
                    borderRadius: "30px",
                    color: "#FFFFFF",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                }}
            >
                <Image src="overlay.svg" alt="overlay" fill />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: 24,
                        zIndex: 1,
                    }}
                >
                    <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
                        {props.data.card_holder_name}
                    </span>
                    <Image
                        src="mastercard.svg"
                        alt="mastercard"
                        width={40}
                        height={40}
                    />
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: 12,
                        padding: 24,
                        zIndex: 1,
                    }}
                >
                    <span>{props.data.card_number}</span>
                    <span>{props.data.exp_date}</span>
                </div>
            </div>
        </motion.div>
    );
};

export default CreditCard;

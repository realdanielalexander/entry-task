import { ArrowRightOutlined } from "@ant-design/icons";
import React from "react";
import { PayButtonProps } from "./entities";
import SyncLoader from "react-spinners/SyncLoader";
import { motion } from "framer-motion";

const PayButton = (props: PayButtonProps) => {
    const { isLoading, onSlide } = props;
    return (
        <button className="pay-button">
            <div className={"pay-button__container"}>
                <motion.div
                    drag="x"
                    dragConstraints={{ left: 0, right: 240 }}
                    dragElastic={0.2}
                    dragMomentum={false}
                    dragSnapToOrigin
                    onDragEnd={(event, info) => {
                        if (info.point.x >= 200) {
                            onSlide();
                        }
                    }}
                    className="pay-button__text-container"
                >
                    <ArrowRightOutlined
                        style={{ color: "#E84B38", fontWeight: "bold" }}
                    />
                </motion.div>
                {isLoading ? (
                    <SyncLoader
                        style={{
                            width: "100%",
                        }}
                        color="white"
                        size={9}
                    />
                ) : (
                    <span style={{ width: "100%" }}>Pay</span>
                )}
            </div>
        </button>
    );
};

export default PayButton;

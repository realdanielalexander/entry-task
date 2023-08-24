import Image from "next/image";
import React from "react";
import { ReactElement } from "react";

const NoData = ({ text, image }: { text: string; image: ReactElement }) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 16,
                alignItems: "center",
                marginTop: 32,
            }}
        >
            {image}
            <span>{text}</span>
        </div>
    );
};

export default NoData;

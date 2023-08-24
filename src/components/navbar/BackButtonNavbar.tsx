import { GoldOutlined, LeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import React from "react";

const BackButtonNavbar = ({ title }: { title: string }) => {
    const router = useRouter();
    return (
        <div className={"navbar"}>
            <div>
                <LeftOutlined onClick={() => router.back()} />
            </div>
            <span style={{ fontWeight: "bold" }}>{title}</span>
            <GoldOutlined style={{ color: "white" }} />
        </div>
    );
};

export default BackButtonNavbar;

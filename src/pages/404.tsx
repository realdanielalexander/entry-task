import BaseButton from "@/components/buttons/BaseButton";
import { TITLE } from "@/constants";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const NotFound = () => {
    const router = useRouter();
    return (
        <div className="page">
            <Head>
                <title>{`Not Found - ${TITLE}`}</title>
            </Head>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 16,
                    height: "100vh",
                }}
            >
                <Image
                    width={64}
                    height={64}
                    src="./shopee.svg"
                    alt="Shopee Logo"
                />
                <span>
                    Sorry, but the page you&apos;re looking for isn&apos;t
                    available
                </span>
                <BaseButton
                    onClick={() => router.push("/")}
                    text="Back to home"
                />
            </div>
        </div>
    );
};

export default NotFound;

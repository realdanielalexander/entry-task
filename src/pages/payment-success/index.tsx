import SecondaryButton from "@/components/buttons/SecondaryButton";
import { TITLE } from "@/constants";
import { CheckOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const variants = {
    small: {
        scale: 1,
        transition: { duration: 0.5 },
    },
    big: {
        scale: 1.25,
        transition: { duration: 0.5 },
    },
};

const PaymentSuccess = () => {
    const router = useRouter();
    const { data: session } = useSession();

    if (session === undefined) {
        return <p>Loading...</p>;
    }

    if (session === null) {
        router.push("/login");
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "#E84B38",
            }}
            className="page"
        >
            <Head>
                <title>{`Payment Success - ${TITLE}`}</title>
            </Head>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                className="content"
            >
                <motion.div
                    style={{
                        width: "128px",
                        height: "128px",
                        borderRadius: "128px",
                        position: "absolute",
                        backgroundColor: "rgba(255, 255, 255, 0.5)",
                    }}
                    initial={{
                        scale: 1,
                        opacity: 1,
                    }}
                    animate={{
                        scale: 2,
                        opacity: 0.2,
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatDelay: 0,
                        repeatType: "reverse",
                        duration: 1,
                    }}
                ></motion.div>
                <motion.div
                    style={{
                        width: "128px",
                        height: "128px",
                        borderRadius: "128px",
                        position: "absolute",
                        backgroundColor: "rgba(255, 255, 255, 0.25)",
                    }}
                    initial={{
                        scale: 1,
                        opacity: 1,
                    }}
                    animate={{
                        scale: 3,
                        opacity: 0,
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatDelay: 0,
                        repeatType: "reverse",
                        duration: 1,
                    }}
                ></motion.div>
                <motion.div
                    style={{
                        width: "128px",
                        height: "128px",
                        borderRadius: "128px",
                        position: "absolute",
                        backgroundColor: "rgba(255, 255, 255, 0.25)",
                    }}
                    initial={{
                        scale: 1,
                        opacity: 1,
                    }}
                    animate={{
                        scale: 4,
                        opacity: 0,
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatDelay: 0,
                        repeatType: "reverse",
                        duration: 1,
                    }}
                ></motion.div>
                <motion.div
                    initial={{
                        scale: 1,
                    }}
                    animate={{
                        scale: 1.2,
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatDelay: 0,
                        repeatType: "reverse",
                        duration: 1,
                    }}
                >
                    <CheckOutlined
                        style={{
                            fontSize: "4rem",
                            color: "white",
                            zIndex: 1,
                        }}
                    />
                </motion.div>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#FFFFFF",
                }}
            >
                <p style={{ fontWeight: "bold", fontSize: 20, marginTop: 48 }}>
                    Payment Success!
                </p>
                <p style={{ margin: 0 }}>Your payment is successful!</p>
                <p style={{ margin: 0 }}>
                    Please wait for your product to arrive :)
                </p>
                <SecondaryButton
                    style={{ marginTop: 16 }}
                    text="Back to home"
                    onClick={() => router.push("/")}
                />
            </div>
        </div>
    );
};

export default PaymentSuccess;

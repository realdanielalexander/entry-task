import React from "react";
import GoogleLoginButton from "@/components/buttons/GoogleLoginButton";
import Image from "next/image";
import { useSession, signIn } from "next-auth/react";
import Snackbar from "@/components/snackbar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import { TITLE } from "@/constants";

const Login = () => {
    const { data: session } = useSession();
    // Check for access denied query params
    const router = useRouter();
    const { error } = router.query;

    useEffect(() => {
        if (!session) return;

        router.push("/");
    }, [session, router]);

    return (
        <div className="page login">
            <Head>
                <title>{`Login - ${TITLE}`}</title>
            </Head>
            <Snackbar
                show={error !== undefined}
                text="Please use only Shopee or SeaMoney emails."
            />
            <div
                style={{
                    marginTop: "auto",
                }}
            >
                <Image
                    width={64}
                    height={64}
                    src="./shopee.svg"
                    alt="Shopee Logo"
                />
            </div>
            <div
                style={{
                    marginTop: 24,
                    fontWeight: "bold",
                    fontSize: "1.125rem",
                }}
            >
                Daniel&apos;s Entry Task
            </div>
            <div style={{ margin: 12, fontWeight: "bold" }}>
                <GoogleLoginButton onClick={() => signIn("google")} />
            </div>
            <div
                style={{
                    marginTop: "auto",
                    marginBottom: "2rem",
                    color: "GrayText",
                }}
            >
                ShopeePay ID Payment Processing
            </div>
        </div>
    );
};

export default Login;

import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import ProvidersWrapper from "./ProvidersWrapper";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main
            style={{
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: "768px",
                minHeight: "100vh",
            }}
        >
            <ProvidersWrapper>
                <Component {...pageProps} />
            </ProvidersWrapper>
        </main>
    );
}

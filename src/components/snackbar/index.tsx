import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/components/snackbars/Snackbar.module.css";

const Snackbar = ({ show, text }: { show: boolean; text: string }) => {
    const [isDisplayed, setIsDisplayed] = useState(false);

    useEffect(() => {
        if (!show) {
            return;
        }

        setIsDisplayed(true);

        setTimeout(() => setIsDisplayed(false), 3000);
    }, [show]);

    return (
        <div
            id="snackbar"
            style={{
                visibility: "hidden",
                fontSize: ".75rem",
                backgroundColor: "#E84B38",
                color: "#fff",
                textAlign: "center",
                padding: "16px",
                position: "fixed",
                zIndex: 1,
                top: "30px",
            }}
            className={isDisplayed ? styles.show : ""}
        >
            {text}
        </div>
    );
};

export default Snackbar;

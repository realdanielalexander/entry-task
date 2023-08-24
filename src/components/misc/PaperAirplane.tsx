import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimationControls, useCycle } from "framer-motion";

const PlaneVariants = {
    initial: { x: 0 },
    top: {
        top: 56,
        right: 140,
        transition: {
            duration: 1,
            ease: "easeIn",
        },
    },
    right: {
        top: 44,
        right: 44,
        opacity: 0,
        zIndex: -1,
        transition: {
            duration: 1,
            ease: "easeOut",
        },
    },
};

const PaperAirplane = ({ isClicked }: { isClicked: boolean }) => {
    const controls = useAnimationControls();
    const [animate, cycleAnimate] = useCycle("initial", "top", "right");

    useEffect(() => {
        if (!isClicked) return;
        // controls.start("animate");
        setTimeout(cycleAnimate, 1000);
        setTimeout(cycleAnimate, 2000);
    }, [isClicked]);

    return (
        <motion.div
            style={{ position: "absolute" }}
            variants={PlaneVariants}
            initial="initial"
            animate={animate}
        >
            <Image
                src="paper-plane-solid.svg"
                alt="Paper Plane"
                width={12}
                height={12}
            />
        </motion.div>
    );
};

export default PaperAirplane;

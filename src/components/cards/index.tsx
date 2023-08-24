import useCartStore from "@/stores/cart";
import { formatCurrency } from "@/utils/formatter";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import LikeIconButton from "../buttons/LikeIconButton";
import PaperAirplane from "../misc/PaperAirplane";
import { ProductCardProps } from "./entities";

const ProductCard = (props: ProductCardProps) => {
    const { data: session } = useSession();
    const router = useRouter();
    const addProduct = useCartStore((state) => state.addProduct);
    const deleteProduct = useCartStore((state) => state.deleteProduct);
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 12,
                padding: 8,
                background: "#FFFFFF",
            }}
        >
            <PaperAirplane isClicked={isClicked} />
            <Head>
                <link rel="preload" as="image" href={props.data.image} />
            </Head>
            <div
                style={{
                    aspectRatio: 1,
                    position: "relative",
                    backgroundColor: "#EFEFF2",
                    borderRadius: 12,
                    width: "100%",
                    height: 0,
                    paddingBottom: "100%",
                }}
            >
                <LikeIconButton
                    onClick={() => {
                        if (!session) {
                            router.push("/login");
                            return;
                        }
                        if (props.isLiked) {
                            deleteProduct(props.data.id);
                        } else {
                            setIsClicked(true);
                            addProduct(props.data);
                        }
                    }}
                    isLiked={props.isLiked}
                />
                <Image src={props.data.image} alt="Product" fill />
            </div>
            <p
                style={{
                    margin: 0,
                    marginTop: 12,
                    fontSize: 12,
                    textAlign: "center",
                }}
            >
                {props.data.name}
            </p>
            <p
                style={{
                    margin: 0,
                    marginTop: 4,
                    fontSize: 10,
                    fontWeight: "bold",
                }}
            >
                {formatCurrency(props.data.price)}
            </p>
        </div>
    );
};

export default ProductCard;

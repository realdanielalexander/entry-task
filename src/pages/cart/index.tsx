import BaseButton from "@/components/buttons/BaseButton";
import ProductCartItem from "@/components/cards/ProductCartItem";
import BackButtonNavbar from "@/components/navbar/BackButtonNavbar";
import NoData from "@/components/states/NoData";
import { TITLE } from "@/constants";
import Product from "@/entities/product";
import { useGetFromStore } from "@/hooks/zustandHooks";
import useCartStore from "@/stores/cart";
import { formatCurrency } from "@/utils/formatter";
import { ContainerOutlined } from "@ant-design/icons";
import { AnimatePresence } from "framer-motion";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const Cart = () => {
    const products = useGetFromStore(
        useCartStore,
        (state: any) => state.products
    );

    const { data: session } = useSession();
    const router = useRouter();

    if (!products) {
        return null;
    }

    if (session === undefined) {
        return <p>Loading...</p>;
    }

    if (session === null) {
        router.push("/login");
    }

    const temp = products as Product[];

    const totalPrice = temp.reduce((acc, curr) => acc + curr.price, 0);

    return (
        <div className="page">
            <Head>
                <title>{`Cart - ${TITLE}`}</title>
            </Head>
            <BackButtonNavbar title={"My Cart"} />
            <div className="content cart">
                <AnimatePresence>
                    {temp && temp.length > 0 ? (
                        temp.map((product, index) => (
                            <ProductCartItem
                                key={product.id}
                                data={product}
                                index={index}
                            />
                        ))
                    ) : (
                        <NoData
                            image={
                                <ContainerOutlined
                                    style={{ fontSize: "3rem", color: "grey" }}
                                />
                            }
                            text="You don't have any products in your cart"
                        />
                    )}
                </AnimatePresence>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "fixed",
                    width: "100%",
                    marginTop: "auto",
                    // left: 0,
                    right: 0,
                    bottom: 0,
                    paddingBottom: 16,
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        maxWidth: "768px",
                        alignItems: "center",
                        padding: 16,
                    }}
                >
                    <span style={{ marginLeft: 32 }}>Total</span>
                    <span
                        style={{
                            marginRight: 32,
                            fontSize: "1.25rem",
                            fontWeight: "bold",
                        }}
                    >
                        {formatCurrency(totalPrice)}
                    </span>
                </div>
                <BaseButton
                    disabled={totalPrice === 0}
                    text="Checkout"
                    onClick={() => router.push("/payment")}
                />
            </div>
        </div>
    );
};

export default Cart;

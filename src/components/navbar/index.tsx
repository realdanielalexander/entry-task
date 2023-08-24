import Product from "@/entities/product";
import { useGetFromStore } from "@/hooks/zustandHooks";
import useCartStore, { CartState } from "@/stores/cart";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CartButton from "../buttons/CartButton";
import AuthButton from "../buttons/AuthButton";

const Navbar = () => {
    const { data: session } = useSession();
    const router = useRouter();
    const likedProducts = useGetFromStore<Product[]>(
        useCartStore,
        (state: CartState) => state.products
    );

    const [likedProductsState, setLikedProductsState] = useState<Product[]>([]);

    const reset = useCartStore((state) => state.reset);
    useEffect(() => {
        if (!likedProducts) return;

        setLikedProductsState(likedProducts);
    }, [likedProducts]);

    const handleSignOut = () => {
        reset();
        signOut().then(() => router.push("/login"));
    };

    return (
        <div className="navbar">
            {session ? (
                <AuthButton text="Sign out" onClick={handleSignOut} />
            ) : (
                <AuthButton
                    text="Sign in"
                    onClick={() => router.push("/login")}
                />
            )}
            <span
                style={{
                    position: "absolute",
                    right: "40%",
                    left: "40%",
                    top: "48px",
                    fontWeight: "bold",
                    flexGrow: 1,
                    textAlign: "center",
                }}
            >
                Product List
            </span>
            <CartButton numberOfItems={likedProductsState.length} />
        </div>
    );
};

export default Navbar;

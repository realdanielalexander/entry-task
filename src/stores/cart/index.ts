import Product from "@/entities/product";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartStateState {
    state: CartState;
}
export interface CartState {
    products: Product[];
    deleteProduct: (id: number) => void;
    addProduct: (product: Product) => void;
    reset: () => void;
}

const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            products: [],
            deleteProduct: (id) =>
                set((state) => {
                    return {
                        products: state.products.filter(
                            (product) => product.id !== id
                        ),
                    };
                }),
            addProduct: (product) =>
                set((state) => {
                    const productsCopy = state.products.slice();
                    productsCopy.push(product);
                    return { products: productsCopy };
                }),
            reset: () => {
                set(() => {
                    return { products: [] };
                });
            },
        }),
        {
            name: "cart-products",
            storage: {
                getItem: (name) => {
                    const str = document.cookie;

                    if (!str) {
                        return {
                            state: {
                                products: [],
                            },
                        };
                    }

                    const cookie =
                        str
                            .split(";")
                            .map((c) => c.trim())
                            .filter(
                                (cookie) =>
                                    cookie.substring(0, name.length + 1) ===
                                    `${name}=`
                            )
                            .map((cookie) => {
                                return decodeURIComponent(
                                    cookie.substring(name.length + 1)
                                );
                            })[0] || null;

                    if (!cookie) {
                        return {
                            state: {
                                products: [],
                            },
                        };
                    }

                    const data: CartStateState = JSON.parse(cookie);
                    const products: Product[] = data.state.products;

                    return {
                        state: {
                            products: products,
                        },
                    };
                },

                setItem: (name, newValue) => {
                    const str = JSON.stringify({
                        state: {
                            ...newValue.state,
                            products: newValue.state.products,
                        },
                    });
                    const date = new Date();
                    date.setHours(date.getHours() + 1);

                    document.cookie = `${name}=${str};expires=${new Date().toString()}`;
                },

                removeItem: (name) => {
                    document.cookie = `${name}=;expires=${new Date().toString()}`;
                },
            },
        }
    )
);

export type CartStoreType = typeof useCartStore;
export default useCartStore;

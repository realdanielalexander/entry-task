import { Inter } from "@next/font/google";
import ProductCard from "@/components/cards";
import SearchBar from "@/components/search";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import { useGetFromStore } from "@/hooks/zustandHooks";
import useCartStore, { CartState } from "@/stores/cart";
import Product from "@/entities/product";
import { useQuery } from "react-query";
import axios from "axios";
import ProductPlaceholder from "@/components/states/ProductPlaceholder";
import NoData from "@/components/states/NoData";
import { ContainerOutlined, SmileOutlined } from "@ant-design/icons";
import Head from "next/head";
import { TITLE } from "@/constants";

const useProducts = () => {
    return useQuery("products", async () => {
        const { data } = await axios.get(
            `${process.env.REACT_APP_BE_API_URL}/data`
        );
        return data;
    });
};

export default function Home() {
    // React query
    const { data, error, isFetching } = useProducts();

    const [search, setSearch] = useState("");
    const [currentAppliedSearch, setCurrentAppliedSearch] = useState("");
    const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [likedProductsState, setLikedProductsState] = useState<Product[]>([]);
    const likedProducts = useGetFromStore<Product[]>(
        useCartStore,
        (state: CartState) => state.products
    );

    useEffect(() => {
        if (!data) return;
        setFilteredProducts(
            data.filter((product: Product) =>
                product.name
                    .toLowerCase()
                    .includes(currentAppliedSearch.toLowerCase())
            )
        );
    }, [data, currentAppliedSearch]);

    useEffect(() => {
        if (!likedProducts) return;

        setLikedProductsState(likedProducts);
    }, [likedProducts]);

    const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setCurrentAppliedSearch(search);
    };

    return (
        <div className="page">
            <Head>
                <title>{`Products - ${TITLE}`}</title>
            </Head>
            <Navbar />
            <div className="content">
                <form onSubmit={handleSubmitSearch}>
                    <SearchBar
                        placeholder="Search"
                        value={search}
                        onChange={handleChangeSearch}
                    />

                    {currentAppliedSearch && (
                        <p style={{ fontWeight: "bold" }}>
                            Search results showing for &ldquo;
                            {currentAppliedSearch}&rdquo;
                        </p>
                    )}
                </form>
                {isFetching && (
                    <div className="product-grid">
                        {[...Array.from(Array(6).keys())].map(
                            (element, index) => (
                                <ProductPlaceholder key={index} />
                            )
                        )}
                    </div>
                )}
                {!isFetching && error ? (
                    <NoData
                        image={
                            <SmileOutlined
                                style={{ fontSize: "3rem", color: "grey" }}
                            />
                        }
                        text="An error occured"
                    />
                ) : null}
                {!isFetching && !error && filteredProducts.length === 0 && (
                    <NoData
                        image={
                            <ContainerOutlined
                                style={{ fontSize: "3rem", color: "grey" }}
                            />
                        }
                        text="No products"
                    />
                )}
                {!isFetching && !error && filteredProducts.length > 0 && (
                    <div className="product-grid">
                        {filteredProducts.map((product: Product) => (
                            <ProductCard
                                key={product.id}
                                data={product}
                                isLiked={
                                    likedProductsState.filter(
                                        (element: any) =>
                                            element.id === product.id
                                    ).length > 0
                                }
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

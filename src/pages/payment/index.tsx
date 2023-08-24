import PayButton from "@/components/buttons/PayButton";
import CreditCard from "@/components/cards/CreditCard";
import Input from "@/components/inputs";
import BackButtonNavbar from "@/components/navbar/BackButtonNavbar";
import Product from "@/entities/product";
import { useGetFromStore } from "@/hooks/zustandHooks";
import useCartStore from "@/stores/cart";
import React, { useState } from "react";
import {
    formatCardNumber,
    formatCurrency,
    formatCVV,
    formatExpDate,
} from "@/utils/formatter";
import {
    validateCardholderName,
    validateCardNumber,
    validateCVV,
    validateExpDate,
} from "@/utils/validators";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import axios from "axios";
import { PaymentDetails } from "../../entities/paymentDetails";
import Snackbar from "@/components/snackbar";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { TITLE } from "@/constants";

const Payment = () => {
    const router = useRouter();

    const { data: session } = useSession();

    const mutation = useMutation({
        mutationFn: (transaction: PaymentDetails) => {
            return axios.post(
                `${process.env.REACT_APP_BE_API_URL}/transactions`,
                transaction
            );
        },
        onError: () => {
            setError("error");
        },
        onSuccess: () => router.push("/payment-success"),
    });

    const [error, setError] = useState("");

    const [payload, setPayload] = useState({
        card_holder_name: "",
        card_number: "",
        exp_date: "",
        cvv: "",
    });
    const [errors, setErrors] = useState({
        card_holder_name: "",
        card_number: "",
        exp_date: "",
        cvv: "",
    });
    const [focused, setFocused] = useState("");

    const handleChangeCardholderName = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPayload({
            ...payload,
            [e.target.name]: e.target.value,
        });
    };

    const handleChangeCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPayload({
            ...payload,
            [e.target.name]: formatCardNumber(e.target.value),
        });
    };

    const handleChangeExpDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPayload({
            ...payload,
            [e.target.name]: formatExpDate(e.target.value),
        });
    };

    const handleChangeCVV = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPayload({
            ...payload,
            [e.target.name]: formatCVV(e.target.value),
        });
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setFocused(e.target.name);
    };

    const handleSubmit = () => {
        const cardholderNameError = validateCardholderName(
            payload.card_holder_name
        );
        const cardNumberError = validateCardNumber(payload.card_number);
        const expDateError = validateExpDate(payload.exp_date);
        const cvvError = validateCVV(payload.cvv);
        const errors = {
            card_holder_name: cardholderNameError,
            card_number: cardNumberError,
            exp_date: expDateError,
            cvv: cvvError,
        };

        setErrors(errors);

        const isValid = Object.values(errors).reduce(
            (val, curr) => val && !Boolean(curr),
            true
        );

        if (isValid) {
            mutation.mutate(payload);
        }
    };
    const products = useGetFromStore(
        useCartStore,
        (state: any) => state.products
    );

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
                <title>{`Payment - ${TITLE}`}</title>
            </Head>
            <BackButtonNavbar title={"Payment"} />
            <div
                className="content"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Snackbar
                    show={error !== ""}
                    text="An error occured in the transaction process."
                />
                <div className="payment__credit-card-container">
                    <CreditCard data={payload} focused={focused} />
                </div>
                <div className="payment__form-container">
                    <form
                        className="payment__form"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <strong>Card Information</strong>
                        <Input
                            label="Card Holder Name"
                            placeholder="John Doe"
                            name="card_holder_name"
                            value={payload.card_holder_name}
                            onChange={handleChangeCardholderName}
                            onFocus={handleFocus}
                            error={errors.card_holder_name}
                        />
                        <Input
                            label="Card Number"
                            placeholder="1234 5678 1234 5678"
                            name="card_number"
                            value={payload.card_number}
                            onChange={handleChangeCardNumber}
                            onFocus={handleFocus}
                            error={errors.card_number}
                        />
                        <div className="payment__form-grid-container">
                            <Input
                                label="Exp. Date"
                                placeholder="12/12"
                                name="exp_date"
                                value={payload.exp_date}
                                onChange={handleChangeExpDate}
                                onFocus={handleFocus}
                                error={errors.exp_date}
                            />
                            <Input
                                label="CVV"
                                placeholder="***"
                                name="cvv"
                                type="password"
                                value={payload.cvv}
                                onChange={handleChangeCVV}
                                onFocus={handleFocus}
                                error={errors.cvv}
                            />
                        </div>
                        <div className="payment__billing-information-container">
                            <strong>Billing Information</strong>
                            <div className="payment__billing-information-total-container">
                                <label style={{ width: "100%" }}>Total</label>
                                <span className="payment__billing-information-span">
                                    {formatCurrency(totalPrice)}
                                </span>
                            </div>
                        </div>
                        <div className="payment__pay-button-container">
                            <PayButton
                                isLoading={mutation.isLoading}
                                onSlide={handleSubmit}
                            />
                            <span>
                                Slide the arrow button to complete your payment
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Payment;

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CreditCard from "@/components/cards/CreditCard";
import { PaymentDetails } from "@/entities/paymentDetails";

describe("CreditCard", () => {
    it("renders the credit card correctly", () => {
        const data: PaymentDetails = {
            card_holder_name: "Acong Suherman",
            card_number: "1234 5678 1234 5678",
            exp_date: "12/12",
            cvv: "123",
        };
        render(<CreditCard data={data} focused={"cvv"} />);
        const cardholderName = screen.getByText("Acong Suherman");
        const cardNumber = screen.getByText("1234 5678 1234 5678");
        const exp_date = screen.getByText("12/12");
        const cvv = screen.getByText("***");

        expect(cardholderName).toBeInTheDocument();
        expect(cardNumber).toBeInTheDocument();
        expect(exp_date).toBeInTheDocument();
        expect(cvv).toBeInTheDocument();
    });
});

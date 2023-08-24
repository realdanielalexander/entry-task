import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SecondaryButton from "@/components/buttons/SecondaryButton";

describe("SecondaryButton", () => {
    it("renders a button with the right text", () => {
        render(<SecondaryButton text="Checkout" />);

        const button = screen.getByRole("button");

        expect(button).toHaveTextContent("Checkout");
    });
});

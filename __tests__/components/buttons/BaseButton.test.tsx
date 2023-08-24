import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BaseButton from "@/components/buttons/BaseButton";

describe("BaseButton", () => {
    it("renders a button with the right text", () => {
        render(<BaseButton text="Checkout" />);

        const button = screen.getByRole("button");

        expect(button).toHaveTextContent("Checkout");
    });
});

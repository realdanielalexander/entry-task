import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DeleteCartItemButton from "@/components/buttons/DeleteCartItemButton";

describe("DeleteCartItemButton", () => {
    it("renders the button with the right text", () => {
        render(<DeleteCartItemButton />);

        const button = screen.getByRole("button");

        expect(button).toBeInTheDocument();
    });
});

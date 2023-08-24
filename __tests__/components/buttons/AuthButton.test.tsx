import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AuthButton from "@/components/buttons/AuthButton";

describe("AuthButton", () => {
    it("renders the button with the right text", () => {
        render(<AuthButton text="Sign Out" />);

        const button = screen.getByRole("button");

        expect(button).toHaveTextContent("Sign Out");
    });
    it("renders a button with a clickable function", () => {
        const mockFunc = jest.fn();
        render(<AuthButton text="Sign Out" onClick={mockFunc} />);

        const button = screen.getByRole("button");

        button.click();

        expect(button).toHaveTextContent("Sign Out");
        expect(mockFunc).toHaveBeenCalled();
    });
});

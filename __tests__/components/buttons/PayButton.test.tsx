import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import PayButton from "@/components/buttons/PayButton";

describe("PayButton", () => {
    it("renders the button correctly", () => {
        const mockFn = jest.fn();
        render(<PayButton isLoading={false} onSlide={mockFn} />);
        const button = screen.getByRole("button");

        expect(button).toBeInTheDocument();
    });
});

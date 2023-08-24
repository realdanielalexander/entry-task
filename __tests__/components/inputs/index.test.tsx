import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "@/components/inputs";

describe("Input", () => {
    it("renders the input correctly", () => {
        render(<Input label="Label" error="Error" />);
        const error = screen.getByText("Error");
        const input = screen.getByText("Label");

        expect(error).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    });
});

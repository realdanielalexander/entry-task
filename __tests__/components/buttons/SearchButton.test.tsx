import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchButton from "@/components/buttons/SearchButton";

describe("SearchButton", () => {
    it("renders the button correctly", () => {
        render(<SearchButton />);
        const button = screen.getByRole("button");

        expect(button).toBeInTheDocument();
    });
});

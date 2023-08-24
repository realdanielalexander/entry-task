import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from "@/components/search";

describe("Search", () => {
    it("renders the search bar correctly", () => {
        render(<SearchBar placeholder="Search" />);
        const input = screen.getByPlaceholderText("Search");

        expect(input).toBeInTheDocument();
    });
});

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Snackbar from "@/components/snackbar";

describe("Snack bar", () => {
    it("renders the snackbar correctly", () => {
        render(<Snackbar show={true} text={"Snackbar"} />);
        const snackbar = screen.getByText("Snackbar");

        expect(snackbar).toBeInTheDocument();
    });
});

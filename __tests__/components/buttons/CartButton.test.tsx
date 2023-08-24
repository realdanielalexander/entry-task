import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CartButton from "@/components/buttons/CartButton";
import mockRouter from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));

describe("CartButton", () => {
    it("renders the button correctly", () => {
        mockRouter.push("/");
        render(<CartButton numberOfItems={1} />);

        const button = screen.getByRole("button");

        expect(button).toBeInTheDocument();
    });
});

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import GoogleLoginButton from "@/components/buttons/GoogleLoginButton";

describe("GoogleLoginButton", () => {
    it("renders the button correctly", () => {
        render(<GoogleLoginButton />);

        const button = screen.getByRole("button");

        expect(button).toBeInTheDocument();
    });
});

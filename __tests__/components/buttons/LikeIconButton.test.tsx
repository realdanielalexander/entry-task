import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LikeIconButton from "@/components/buttons/LikeIconButton";

describe("LikeIconButton", () => {
  it("renders the button correctly", () => {
    render(<LikeIconButton isLiked={true} />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
});

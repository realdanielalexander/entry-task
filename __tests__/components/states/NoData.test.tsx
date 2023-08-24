import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NoData from "@/components/states/NoData";
import { SmileOutlined } from "@ant-design/icons";

describe("NoData", () => {
    it("renders the no data state correctly", () => {
        render(<NoData text={"No Data"} image={<SmileOutlined />} />);
        const noData = screen.getByText("No Data");

        expect(noData).toBeInTheDocument();
    });
});

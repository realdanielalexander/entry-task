import {
    formatCardNumber,
    formatCurrency,
    formatCVV,
    formatExpDate,
} from "@/utils/formatter";
import "@testing-library/jest-dom";

describe("Card number formatter", () => {
    const cases = [
        ["1234567812345678", "1234 5678 1234 5678"],
        ["abcd", ""],
    ];

    it.each(cases)("format card number", (value, expected) => {
        expect(formatCardNumber(value)).toEqual(expected);
    });
});

describe("Exp date formatter", () => {
    const cases = [
        ["1212", "12/12"],
        ["abcd", ""],
        ["12/121", "12/12"],
    ];

    it.each(cases)("format exp date", (value, expected) => {
        expect(formatExpDate(value)).toEqual(expected);
    });
});

describe("CVV formatter", () => {
    const cases = [
        ["123", "123"],
        ["abc", ""],
        ["1234", "123"],
    ];

    it.each(cases)("format cvv", (value, expected) => {
        expect(formatCVV(value)).toEqual(expected);
    });
});

describe("Currency formatter", () => {
    it("should be able to format currency correctly", () => {
        const value = 10000;
        const formatted = formatCurrency(value);
        expect(formatted).toBe("Rp 10.000");
    });
});

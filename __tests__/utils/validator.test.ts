import {
    validateCardholderName,
    validateCardNumber,
    validateCVV,
    validateExpDate,
} from "@/utils/validators";
import "@testing-library/jest-dom";

describe("Cardholder name validator", () => {
    const cases = [
        ["", "Cardholder name must not be empty"],
        ["Acong Suherman", ""],
    ];

    it.each(cases)("validate cardholder name", (value, expected) => {
        expect(validateCardholderName(value)).toEqual(expected);
    });
});

describe("Card number validator", () => {
    const cases = [
        ["", "Card number must not be empty"],
        ["1234", "Card number must be completed"],
        ["1234 5678 1234 5678", ""],
    ];

    it.each(cases)("validate card number", (value, expected) => {
        expect(validateCardNumber(value)).toEqual(expected);
    });
});

describe("Exp date validator", () => {
    const cases = [
        ["", "Exp date must not be empty"],
        ["12", "Exp date must be completed"],
        ["12/12", ""],
    ];

    it.each(cases)("validate exp date", (value, expected) => {
        expect(validateExpDate(value)).toEqual(expected);
    });
});

describe("CVV validator", () => {
    const cases = [
        ["", "CVV must not be empty"],
        ["12", "CVV must be completed"],
        ["123", ""],
    ];

    it.each(cases)("validate cvv", (value, expected) => {
        expect(validateCVV(value)).toEqual(expected);
    });
});

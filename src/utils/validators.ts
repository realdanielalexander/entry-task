export const validateCardholderName = (value: string) => {
    if (value === "") {
        return "Cardholder name must not be empty";
    }

    return "";
};

export const validateCardNumber = (value: string) => {
    if (value === "") {
        return "Card number must not be empty";
    }

    if (value.length !== 19) {
        return "Card number must be completed";
    }

    return "";
};

export const validateExpDate = (value: string) => {
    if (value === "") {
        return "Exp date must not be empty";
    }

    if (value.length !== 5) {
        return "Exp date must be completed";
    }

    if (
        parseInt(value.substring(0, 2)) > 12 ||
        parseInt(value.substring(0, 2)) < 0
    ) {
        return "Exp.date must be a valid date";
    }

    return "";
};

export const validateCVV = (value: string) => {
    if (value === "") {
        return "CVV must not be empty";
    }

    if (value.length !== 3) {
        return "CVV must be completed";
    }

    return "";
};

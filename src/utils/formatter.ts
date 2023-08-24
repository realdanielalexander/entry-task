export const formatCardNumber = (value: string) => {
    if (value.length > 19) {
        value = value.substring(0, 19);
    }

    const raw = value
        .replace(/ /g, "")
        .replace(/\D/g, "")
        .match(/.{1,4}/g);

    if (!raw) {
        return "";
    }

    return raw.join(" ");
};

export const formatExpDate = (value: string) => {
    if (value.length > 4) {
        value = value.substring(0, 5);
    }

    const raw = value
        .replace(/ /g, "")
        .replace(/\D/g, "")
        .match(/.{1,2}/g);

    if (!raw) {
        return "";
    }

    return raw.join("/");
};

export const formatCVV = (value: string) => {
    if (value.length > 3) {
        value = value.substring(0, 3);
    }

    const raw = value
        .replace(/ /g, "")
        .replace(/\D/g, "")
        .match(/.{1,3}/g);

    if (!raw) {
        return "";
    }

    return raw[0];
};

export const formatCurrency = (value: number) => {
    return Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumSignificantDigits: 1,
    }).format(value);
};

import { PaymentDetails } from "@/entities/paymentDetails";

interface ProductCardData {
    id: number;
    name: string;
    price: number;
    image: string;
}

interface ProductCardProps {
    data: ProductCardData;
    isLiked: boolean;
}

interface CartItemProps {
    key: number;
    data: ProductCardData;
    index: number;
}
interface CreditCardProps {
    data: PaymentDetails;
    focused: string;
}

export type {
    ProductCardData,
    ProductCardProps,
    CartItemProps,
    CreditCardProps,
};

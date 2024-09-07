import { Currency } from "../../../app/types/typesOfCurrencies";

export const calculateExchange = (
    selectedValue: number | null,
    fromCurrency: Currency | null,
    toCurrency: Currency | null
) => {
    if (selectedValue && fromCurrency && toCurrency) {
        return (selectedValue*fromCurrency.price) / toCurrency.price
    } else return null
}
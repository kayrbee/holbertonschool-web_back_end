import Currency from "./3-currency";

export default class Pricing {
    constructor(amount, currency) {
        this.amount = amount;
        this.currency = currency;
    }

    get amount() {
        return this._amount;
    }

    set amount(amount) {
        if (amount === undefined || typeof amount !== "number") {
            throw new TypeError("amount must be a number");
        }
        this._amount = amount;
    }

    get currency() {
        return this._currency;
    }

    set currency(currency) {
        if (currency === undefined || !(currency instanceof Currency)) {
            throw new TypeError("Currency must be a currency");
        }
        this._currency = currency;
    }

    // Method
    displayFullPrice() {
        return (`${this.amount} ${this.currency.name} (${this.currency.code})`);
    }

    static convertPrice(amount, conversionRate) {
        if (typeof amount !== "number" || typeof conversionRate !== "number") {
            throw new TypeError("Amount and conversion rate must be numbers");
        }
        return (amount * conversionRate);

    }

}
const api = "https://v6.exchangerate-api.com/v6/418e4f9c01e5def5ccd58c44/latest/USD";

const yourCurrencyEl = document.getElementById("your-currency");
const amountFirstEl = document.getElementById("amount-first");
const targetCurrencyEl = document.getElementById("target-currency");
const amountSecondEl = document.getElementById("amount-second");
const exchangeRateEl = document.getElementById("exchange-rate");

try {
    function UpdateRate() {
        fetch(api)
            .then((res) => res.json())
            .then((data) => {
                const yourCurrency = yourCurrencyEl.value;
                const targetCurrency = targetCurrencyEl.value;
                const rate = data.conversion_rates[targetCurrency] / data.conversion_rates[yourCurrency];
                const amountFirst = parseFloat(amountFirstEl.value);
                const amountSecond = (amountFirst * rate).toFixed(2);
                amountSecondEl.value = amountSecond;
                exchangeRateEl.innerText = `1 ${yourCurrency} = ${rate.toFixed(4)} ${targetCurrency}`;
            });
        yourCurrencyEl.addEventListener("change", UpdateRate);
        targetCurrencyEl.addEventListener("change", UpdateRate);
        amountFirstEl.addEventListener("input", UpdateRate);


    }
} catch (error) {
    console.error("Error fetching exchange rates:", error);
}





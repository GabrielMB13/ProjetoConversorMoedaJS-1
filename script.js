

/* CÓDIGO DO PROFESSOR
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyToConvert = document.querySelector(".currency-to-convert")

function convertValues (){

    const inputCurrencyValue = document.querySelector(".input-currency").value   
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")//moeda e valor a converter
    const currencyValueConverted = document.querySelector(".currency-value")// moeda e valor convertido
    

    const dolarToday = 5.2 
    const euroToday = 6.2
    const realToday = 1

    if (currencySelect.value == "dolar"){ // Se o select tiver selecionado o dolar, entre aqui.

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "USD" 
        }) .format(inputCurrencyValue / dolarToday) 
    }

    if (currencySelect.value == "euro"){ //Se o select tiver selecionado o euro, entre aqui.

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "EUR"
        }) .format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "real"){ // Se o select tiver selecionado o real, entre aqui.

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL" 
        }) .format(inputCurrencyValue / realToday)
    }


    if (currencyToConvert.value == "real"){    

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL" 
    }) .format(inputCurrencyValue)}

    if (currencyToConvert.value == "dolar"){    

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "USD" 
        }) .format(inputCurrencyValue)}

    if (currencyToConvert.value == "euro"){    

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "EUR" 
        }) .format(inputCurrencyValue)}
   
} 

function changeCurrency1(){
    const currencyName1 = document.getElementById("currency-name1")
    const currencyImg1 = document.getElementById("img-to-converter")
        
    if(currencyToConvert.value == "dolar"){
        currencyName1.innerHTML =  "Dólar americano"
        currencyImg1.src = "./assets/dolar.png"}
        
    if(currencyToConvert.value == "euro"){
        currencyName1.innerHTML =  "Euro"
        currencyImg1.src = "./assets/euro.png"}
        
    if(currencyToConvert.value == "real"){
        currencyName1.innerHTML =  "Real brasileiro"
        currencyImg1.src = "./assets/real.png"}

    convertValues ()
}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if(currencySelect.value == "dolar"){
    currencyName.innerHTML =  "Dólar americano"
    currencyImg.src = "./assets/dolar.png"}

    if(currencySelect.value == "euro"){
        currencyName.innerHTML =  "Euro"
        currencyImg.src = "./assets/euro.png"}

    if(currencySelect.value == "real"){
        currencyName.innerHTML =  "Real brasileiro"
        currencyImg.src = "./assets/real.png"}
    convertValues ()
}

currencyToConvert.addEventListener("change", changeCurrency1)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)*/


//MEU CÓDIGO COM AJUDA DA IA, BASEADO NO CÓDIGO DO PROFESSOR.

const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select"); //converter Para:
const currencyToConvert = document.querySelector(".currency-to-convert");//converter De:

const exchangeRates = {
    dolar: 5.2,
    euro: 6.2,
    real: 1
};

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");//valor a converter
    const currencyValueConverted = document.querySelector(".currency-value");//valor convertido

    const fromCurrency = currencyToConvert.value;
    const toCurrency = currencySelect.value;

    // Converte para Real primeiro e depois para a moeda desejada
    const valueInReal = inputCurrencyValue * exchangeRates[fromCurrency];
    const convertedValue = (valueInReal / exchangeRates[toCurrency]).toFixed(2);

    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: toCurrency === "dolar" ? "USD" : toCurrency === "euro" ? "EUR" : "BRL"
    }).format(convertedValue);

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: fromCurrency === "dolar" ? "USD" : fromCurrency === "euro" ? "EUR" : "BRL"
    }).format(inputCurrencyValue);
}

function updateCurrencyDisplay(currency, element, imgElement) {
    const currencyNames = {
        dolar: "Dólar americano",
        euro: "Euro",
        real: "Real brasileiro"
    };
    const currencyImages = {
        dolar: "./assets/dolar.png",
        euro: "./assets/euro.png",
        real: "./assets/real.png"
    };

    element.innerHTML = currencyNames[currency];
    imgElement.src = currencyImages[currency];
}

function changeCurrency1() {
    updateCurrencyDisplay(currencyToConvert.value, document.getElementById("currency-name1"), document.getElementById("img-to-converter"));
    convertValues();
}

function changeCurrency() {
    updateCurrencyDisplay(currencySelect.value, document.getElementById("currency-name"), document.querySelector(".currency-img"));
    convertValues();
}

currencyToConvert.addEventListener("change", changeCurrency1);
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);


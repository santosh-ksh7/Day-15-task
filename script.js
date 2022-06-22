// Solving problems using array functions on rest countries data

// 1st approach ------> fetching the data from the API 

const getData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        let countriesinfo = xhr.response;

        // Problem 1 : Get all the countries from Asia continent /region using Filter function

        let result1 = countriesinfo.filter((ele) => ele.region==="Asia");
        console.log(result1);


        // Problem 2 : Get all the countries with a population of less than 2 lakhs using Filter function

        let result2 = countriesinfo.filter((ele) => ele.population<200000);
        console.log(result2);


        // Problem 3 : Print the following details name, capital, flag using forEach function

        countriesinfo.forEach((ele) => console.log(`Name: ${ele.name.common} Capital: ${ele.capital} Flag: ${ele.flag}`))


        // Problem 4 : Print the total population of countries using reduce function

        let result3 = countriesinfo.reduce((total,ele) => total+ele.population, 0);
        console.log(result3);

    }
};


getData();







// Problem 5 : https://restcountries.com/v3.1/currency/USD    Print the country which uses US Dollars as currency.

const getData1 = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v3.1/currency/USD");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        let countriesinfo = xhr.response;

        countriesinfo.forEach((ele)=> console.log(ele.name.common))
        
    }
};


getData1();
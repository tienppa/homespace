const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let countryArr = [
    { name: "Virgin Islands, British", code: "VG" },
    { name: "Virgin Islands, U.S.", code: "VI" },
    { name: "Wallis and Futuna", code: "WF" },
    { name: "Western Sahara", code: "EH" },
    { name: "Yemen", code: "YE" },
    { name: "Zambia", code: "ZM" },
    { name: "Zimbabwe", code: "ZW" },
];

let countriesHtml = $("#countries");
console.log(countriesHtml);

countryArr.map((item) => {
    const option = document.createElement("option");
    option.text = item.name;
    option.value = item.code;
    countriesHtml.add(option);
});

const btnSubmit = document.getElementById('btnSubmit');

const startYear = document.getElementById('startYear');
const starMonth = document.getElementById('starMonth');
const starDay = document.getElementById('starDay');
const numberOfDays = document.getElementById('numberOfDays');
const countryCode = document.getElementById('countryCode');

btnSubmit.addEventListener('click',(e)=>{
    e.preventDefault();

    const year = startYear.value;
    const month = starMonth.value;
    const day = starDay.value;
    const numberOfDaysValue = numberOfDays.value;
    const countryCodeValue = countryCode.value;


    render();
})


document.addEventListener('DOMContentLoaded',(e)=>{
    render();
})

const render = () => {

    console.log("render");
};


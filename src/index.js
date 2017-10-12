import {getCalendarDiff,addDaystoDate } from './util'
import {Calendar} from './Calendar'

const btnSubmit = document.getElementById('btnSubmit');

const startYear = document.getElementById('startYear');
const starMonth = document.getElementById('starMonth');
const starDay = document.getElementById('starDay');
const numberOfDays = document.getElementById('numberOfDays');
const countryCode = document.getElementById('countryCode');

btnSubmit.addEventListener('click',(e)=>{
    e.preventDefault();

    const year = parseInt( startYear.value);
    const month = parseInt(starMonth.value);
    const day =  parseInt(starDay.value);
    const numberOfDaysValue = parseInt(numberOfDays.value) ;
    const countryCodeValue = countryCode.value;

    var inititalDate = new Date(year, month-1, day)
    var finalDate = addDaystoDate(inititalDate,numberOfDaysValue);

    const arrayOfCalendarsInfo = getCalendarDiff(finalDate,inititalDate);

    const calendars = arrayOfCalendarsInfo
        .map((t=>new Calendar({
            year:t.year,
            month:t.month,
            day: t.iniDay, 
            countryCode:t.countryCode, 
            lastDay:t.lastDay }).generateDays())
        );

    render(calendars);
})


document.addEventListener('DOMContentLoaded',(e)=>{
    render([]);
})

const getCss = (weekday) => {
    if(weekday && (weekday.weekDay == 0 || weekday.weekDay == 6)){
        return "weekendClass";
    }else if(weekday && (weekday.weekDay >0 || weekday.weekDay <6 )){
        return "Weekdays";
    }
    return "";
}

const getDay = (weekday)=>{
    if(weekday){
        return weekday.day
    }
    return "";
}

const renderWeeks = (weeks)=> {

    console.log(weeks);

    return weeks.map(week=> {
          return  `
            <tr>
               ${week.map((weekday) => `<td class="${getCss(weekday)}">${getDay(weekday)}</td>`).join("")}
            </tr>
            `}).join("");
}

const render = (calendars) => {

    console.log(calendars);
    const sectionCalendar =  document.getElementById("sectionCalendar");

    const monthslabel = ['January', 'February', 'March', 'April','May', 'June', 'July', 'August', 'September','October', 'November', 'December'];

    sectionCalendar.innerHTML = calendars.map(c=> 
    `
    <table class="table-condensed table-bordered table-striped">
    <thead>
        <tr>
            <th colspan="7">
            <span class="btn-group">
                <a class="btn active">${monthslabel[c.month]} ${c.year}</a>
            </span>
            </th>
        </tr>
        <tr>
            <th>Su</th>
            <th>Mo</th>
            <th>Tu</th>
            <th>We</th>
            <th>Th</th>
            <th>Fr</th>
            <th>Sa</th>
        </tr>
    </thead>
    <tbody>
    ${renderWeeks(c.weeks)}        
    </tbody>
</table>
    `
    ).join("");

};


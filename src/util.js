
const getMonthDiff = (d1, d2) => {
    var d  =  (d1.getFullYear()*12 + d1.getMonth() ) - (d2.getFullYear()*12 + d2.getMonth()) + 1;
    return d;
}
const maxDayInMonth = (date) =>{ 
    return new Date(date.getFullYear(), date.getMonth() + 1 , 0).getDate();
}

export const addDaystoDate = (date, numberOfDays = 1 ) => {
    if(numberOfDays == 0){
        return date;
    }
    return new Date(date.getTime() + (numberOfDays-1)*24*60*60*1000);
}

export const getCalendarDiff = (finalDate,initialDate) => {
    const monthDiff = getMonthDiff(finalDate,initialDate);

    const arrayOfCalendars= []

    if(monthDiff == 1){
        let calendarInfo =  {year:initialDate.getFullYear(), month:initialDate.getMonth(), iniDay:initialDate.getDate(), lastDay:finalDate.getDate()};
        arrayOfCalendars.push(calendarInfo);
    }else if(monthDiff >= 2){
        for (var index = 1; index <= monthDiff; index++) {

            const firstMonth = index == 1;
            const lastMonth = index == monthDiff;

            if(firstMonth){
                let calendarInfo =  {year:initialDate.getFullYear(), month:initialDate.getMonth(), iniDay:initialDate.getDate()};
                arrayOfCalendars.push(calendarInfo);
            }            
            else if (lastMonth){
                let calendarInfo =  {year:finalDate.getFullYear(), month:finalDate.getMonth(), iniDay:1, lastDay:finalDate.getDate()};
                arrayOfCalendars.push(calendarInfo);
            }
            else{
                let calendarInfo =  {year:initialDate.getFullYear(), month:initialDate.getMonth() + index - 1, iniDay:1 };
                arrayOfCalendars.push(calendarInfo);
            }
        }
    }


    return arrayOfCalendars;
}

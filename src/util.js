
const monthDiff= (d1, d2) => {
    var d  =  (d1.getFullYear()*12 + d1.getMonth() ) - (d2.getFullYear()*12 + d2.getMonth()) + 1;
    return d;
}


export const getCalendarDiff = (finalDate,initialDate) => {
    const monthDiff = monthDiff(finalDate,initialDate);

    const arrayOfCalendars= []

    if(monthDiff == 0){
        let calendarInfo =  {year:initialDate.getFullYear(), month:getMonth(), date:year.getDate(), lastDay:finalDate.getDate()};
        arrayOfCalendars.push(calendarInfo);
    }else if(monthDiff > 0){
        for (var index = 0; index < monthDiff; index++) {
            if(index == 0){
                let calendarInfo =  {year:initialDate.getFullYear(), month:getMonth(), date:year.getDate()};
                arrayOfCalendars.push(calendarInfo);
            }
        }
    }
}

import {HttpHolidayApi} from './HttpHolidayApi'

export class Calendar {
    constructor(settings){
        this.year = settings.year;
        this.month = settings.month;
        this.day = settings.day;
        this.contryCode = settings.contryCode;
        this.lastDay = settings.lastDay;
    }

    __builtDays(holidays){

        const initialDate =  new Date(this.year, this.month, this.day || 1);
        const dayInWeek = initialDate.getDay(); // 0,1,2,3,4,5,6 --> Sun,Mon,Tue,Wed,Thu,Fri,Sat
        let dayInMonth = initialDate.getDate();//1,2,3...(28|29|30|31)
        
        this.year = initialDate.getFullYear();
        this.month = initialDate.getMonth();
        this.day = initialDate.getDate();

        // getInHolidays

        const addHolidayIfExists = (date) => {
            // formatign to "2016-10-31" --> "YYYY-MM-DD"
            const {year,month,day} = date
            const format= `${year}-${(month+1).toString().padStart(2,0)}-${(day).toString().padStart(2,0)}`

            for (const prop in holidays){
                if(prop == format ){            
                    Object.assign(date,{holiday: holidays[prop]})
                    break;
                }
            }    
            return date;
        };


        // calculate the max day in month example 28-29-30-31
        let maxDayInMonth = new Date(this.year, this.month +1 , 0).getDate();

        if(this.lastDay && this.lastDay <= maxDayInMonth ){
            maxDayInMonth = this.lastDay
        }
        
        // generate week array
        // [null,null,null,{1},{2},{3},{4}]
        // [{5},{6},{7},{8},{9},{10},11]
        //..         
        const weeks = [];
        const weekDays = [0,1,2,3,4,5,6];

        const week01 = weekDays.map(day =>{
            if(day < dayInWeek){
                return null;
            }
            else if(dayInMonth <= maxDayInMonth){
                const dayOftheCalendar =  { year: this.year, month: this.month, day : dayInMonth++} 
                //addHolidayIfExists(dayOftheCalendar);         
                return dayOftheCalendar;       
            } else{
                return null;
            }
        })

        weeks.push(week01);        

        // rest of the weeks
        while(dayInMonth <= maxDayInMonth){
            const nextweek_X =  weekDays.map(day=>{
                if(dayInMonth > maxDayInMonth ){
                    return null;;
                } else{
                    const dayOftheCalendar =  { year: this.year, month: this.month, day : dayInMonth++} 
                    //addHolidayIfExists(dayOftheCalendar);         
                    return dayOftheCalendar;       
                }
            })
            weeks.push(nextweek_X);
        }

        return {
            year: this.year,
            month: this.month,
            weeks:weeks
        };
    }

    generateDays(){
        //const holidayService = new HttpHolidayApi(this.year,this.month,this.contryCode);
        //    return holidayService.getHotidays()
        //     .then( holidays => {
        //         return this.__builtDays(holidays);
        //     })

        return this.__builtDays({});
    }
}
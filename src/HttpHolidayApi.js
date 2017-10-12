export class HttpHolidayApi{
    constructor(year,month,countryCode = 'US'){
        this.year = year;
        this.month = month,
        this.countryCode = countryCode
    }

    getHotidays(){
        const baseUrl = "https://holidayapi.com/v1/holidays?key=9ecca785-83f5-4450-b03b-b4501fb6fef3";
        const url = `${baseUrl}&country=${this.countryCode}&year=${this.year}&month=${this.month}`;

        return $.get(url)
            .then(data => {
            if(data.status == 200){
                return data.holidays;
            }
            return {};
        })    
    }
}
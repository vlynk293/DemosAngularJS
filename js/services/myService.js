app.service('myService', function(){
   function getNameOfDay(day){
       var weekday = new Array(7);
        weekday[0]=  "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
       return weekday[day];
   }
    function calculateDayPosition(day){
        var date = new Date($scope.year, $scope.month, day);
        var column = date.getDay();
        var row = parseInt($scope.getTotalDate / 7) + 1;
        
        return {day: day, row: row, column: column};
    }
    
    function getDayOfFirstDate(month, year){
        return (new Date(year, month - 1, 1)).getDay();
    }
    
    function getDayOfLastDate(month, year){
        var d = getTotalDateOfMonth(month, year);
        return (new Date(year, month - 1, d)).getDay();
    }
    
    
    function getTotalDateOfMonth(month, year){
        return new Date(year, month, 0).getDate();
    }
    
    function getDayOfDate(year, month, day){
        return (new Date(year, month-1, day)).getDay();
    }
    
    function getDates(month, year) {
        var dates = [];
        var totalDate = getTotalDateOfMonth(month, year);
       for(var d = 0; d<totalDate; d++){
           var day =  getDayOfDate(year, month, d+1);
           dates.push({
               day: d+1, 
               month: month,
               isWeekEnd:day == 6 ||  day == 0
           });
       }
        
        var firstDay = getDayOfFirstDate(month, year);
        
        var previousMonth = month -1;
        var totalPreviousMonth = getTotalDateOfMonth(previousMonth, year);
        
        for(var i = 0; i < firstDay; i++){
            var day = getDayOfDate(year, previousMonth, totalPreviousMonth - i);
            dates.unshift({
                day: totalPreviousMonth - i,
                month: previousMonth,
                isWeekEnd: day == 6 ||  day == 0
            });
        }
        
        var nextMonth = month + 1;
        var lastDay = getDayOfLastDate(month, year);
        for(var i = 0; i < 6 - lastDay; i++){
            var day = getDayOfDate(year, nextMonth, i +1);
            dates.push({
                day: i +1,
                month: nextMonth,
                isWeekEnd: day == 6 ||  day == 0
            });
        }
        
        
        return dates;
    }
    
    return {
        getNameOfDay: getNameOfDay,
        calculateDayPosition: calculateDayPosition,
        getDayOfFirstDate: getDayOfFirstDate,
        getTotalDateOfMonth: getTotalDateOfMonth,
        getDates: getDates
    };
    
});
app.controller('myCtrl', function($scope, myService){
    $scope.month = (new Date()).getMonth() + 1;
    $scope.year = (new Date()).getFullYear();
    $scope.dates = myService.getDates($scope.month, $scope.year);
    $scope.getNameOfDay = function(day){
          return myService.getNameOfDay(day);
    }
    
    $scope.getMonths = function(){
        var months=  [];
        for(var i = 1; i <= 12; i++){
            months.push(i);
        }
        return months;
    }
    
    $scope.getYears = function(){
        var currentYear = (new Date()).getFullYear();
        var maxYear = currentYear + 10;
        var years = [];
        for(var i=currentYear; i<=maxYear; i++){
            years.push(i);
        }
        return years;
    }
    
    $scope.monthYearChange = function(){
        $scope.dates = myService.getDates($scope.month, $scope.year);
    }
    
    
});
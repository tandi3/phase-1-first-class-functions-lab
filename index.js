// Code your solution in this file!
const drivers =['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2);
}
 function returnLastTwoDrivers(drivers) {
     return drivers.slice(-2);
 }
    const selectingDrivers = [returnFirstTwoDrivers,        
    returnLastTwoDrivers];

    function createFareMultiplier(mulitiplier){
    return function(fare){
        return fare * mulitiplier;
    }
}
function fareDoubler(fare){
    return fare * 2;
}
function fareTripler(fare){
    return fare * 3;
}
function selectDifferentDrivers(drivers, selectDifferentDrivers){
    return selectDifferentDrivers(drivers);
}
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTH = 160;
const NUMBER_OF_DAYS = 20;
function getWorkingHours(empCheck) 
{
    switch (empCheck) 
    {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
            break;
        default:
            return 0;
    }
}

let empHrs = 0;
let totalWorkingDays = 0;
let totalEmpHrs = 0;
let totalEmpWage = 0;
while ( totalEmpHrs <= NUMBER_OF_DAYS || totalWorkingDays < NUMBER_OF_DAYS )
{   
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHours(empCheck);
    let empWage = empHrs * WAGE_PER_HOUR;
    totalEmpHrs += empHrs;
    console.log("Employee Wage for day " + totalWorkingDays + " is : " + empWage + "$");
}

totalEmpWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("total Employee hours : " + totalEmpHrs);
console.log("Total Employee wage for 20 days is : " + totalEmpWage);
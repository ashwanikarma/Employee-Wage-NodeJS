const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

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
let totalEmpWage = 0;
for ( let i = 1 ; i <= 20 ; i++ )
{
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHours(empCheck);
    let empWage = empHrs * WAGE_PER_HOUR;
    totalEmpWage += empWage;
    console.log("Employee Wage for day " + i + " is : " + empWage + "$");
}

console.log("Total Employee wage for 20 days is : " + totalEmpWage);
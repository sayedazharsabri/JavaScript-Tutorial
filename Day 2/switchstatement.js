let dayNum = 2;

switch (dayNum) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Enter number between 0-6");
        break;
}

console.log("Out of switch1");



let leaveDay = 1;

switch (leaveDay) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Working Day");
        break;

    case 0:
    case 6:
        console.log("Weekend");
        break;
    default:
        console.log("Enter number between 0-6");
        break;
}
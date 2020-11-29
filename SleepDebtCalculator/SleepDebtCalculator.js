function getSleepHours(day) {
    day = day.toLowerCase();

    switch (day) {
      case 'monday':
        return 6;
        break;
      case 'tuesday':
          return 7;
        break;
      case 'wednesday':
        return 9;
        break;
      case 'tursday':
      return 8;
        break;
      case 'friday':
        return 5;
        break;
      case 'saturday':
        return 10;
        break;
      case 'sunday':
      return 11;
        break;
      default:
        console.log('Wrong day has passed in');
    }
}
const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;

/*
function getActualSleepHours() {
    let days = ['monday', 'tuesday', 'wednesday', 'tursday', 'friday', 'saturday', 'sunday'];
    let totalHours = 0;
    for (let i = 0; i < 7; i++) {
        totalHours += getSleepHours(days[i]);
    }
    return totalHours;
}
*/
/*
function getIdealSleepHours() {
  const idealHoursPerNight = 8;
    return idealHoursPerNight*7;
}
*/
const getIdealSleepHours = idealHours => idealHours * 7;

function calculateSleepDebt() {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(8);
    let difference = 0;
    if (actualSleepHours === idealSleepHours) {
        console.log('User have got the perfect amount of sleep.');
    } else if (actualSleepHours > idealSleepHours) {
        difference = actualSleepHours - idealSleepHours;
      console.log('user have got ' + difference +' hours more sleep than needed');
    } else {
        difference = idealSleepHours - actualSleepHours;
        console.log('User have got ' + difference + ' hours less sleep than the ideal sleep hours and should go to rest');
    }
    
}
calculateSleepDebt();

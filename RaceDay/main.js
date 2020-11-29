let raceNumber = Math.floor(Math.random() * 1000);
let memberRegistered = true;
let memberRegisteredTime = new Date();
let memberAge = 25;
const adultAge = 18;
if (memberRegistered && memberAge >= adultAge) 
  raceNumber+= 1000;
if (memberAge >= adultAge && memberRegistered)
  console.log(`Start time 9:30 am for ${raceNumber}`);
else if (memberAge >= adultAge)
  console.log(`Start time 11:00 am for ${raceNumber}`)
else {
  console.log(`Start time 12:30 pm for ${raceNumber}`);
}
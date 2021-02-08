const Stack = require('./Stack.js');
const prompt = require('prompt-sync')();
// ------------------------------
// Initialization
// ------------------------------
const backPages = new Stack();
const nextPages = new Stack();
let currentPage = 'Start Page';
// ------------------------------
// Helper Functions
// ------------------------------
const showCurrentPage = (action) => {
    console.log(`\n${action}`);
    console.log(`Current page: ${currentPage}`);
    console.log(`Back page: ${backPages.peek()}`);
    console.log(`Next page: ${nextPages.peek()}`);
};
const newPage = (page) => {
    backPages.push(currentPage);
    currentPage = page;
    while (!nextPages.isEmpty()) {
      nextPages.pop();
    }
    showCurrentPage("New: ");
};
const backPage = (page) => {
    nextPages.push(currentPage);
    currentPage = backPages.pop();
    showCurrentPage("Back: ");
};
const nextPage = () => {
  backPages.push(currentPage);
  currentPage = nextPages.pop();
  showCurrentPage("Next: ");
}
/*
 * The following strings are used to prompt the user
 */
const baseInfo = '\nEnter a url';
const backInfo = 'B|b for back page';
const nextInfo = 'N|n for next page';
const quitInfo = 'Q|q for quit';
const question = 'Where would you like to go today? '

// ------------------------------
// User Interface Part 1
// ------------------------------
let finish = false, showBack = false, showNext = false;
showCurrentPage("DEFAULT: ");
while(!finish) {
  let instructions = baseInfo;
  if (backPages.peek() != null) {
    instructions = `${instructions}, ${backInfo}`;
    showBack = true;
  } else {
    showBack = false;
  }

  if (nextPages.peek() != null) {
    instructions = `${instructions}, ${nextInfo}`;
    showNext = true;
  } else {
    showNext = false;
  }
  instructions += ', ' + quitInfo;
  console.log(instructions);
  const answer = prompt(question);
  const lowerCaseAnswer = answer.toLowerCase();
  switch(lowerCaseAnswer) {
      case 'b':
        if (!backPages.isEmpty()) {
          backPage();
        } else {
          console.log("Cannot go to back page. Stack is empty.")
        }
        break;
      case 'n':
        if (!nextPages.isEmpty()) {
          nextPage();
        } else {
          console.log("Cannot go to next page. Stack is empty.");
        }
        break;
      case 'q':
        finish = true;
        break;
      default:
        newPage(answer);
        break;
  }

}
  // ------------------------------
  // User Interface Part 2
  // ------------------------------

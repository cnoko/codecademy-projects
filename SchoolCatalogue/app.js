class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._tests = [];
    this._numberOfStudents = numberOfStudents;
    this._overviewText = '';
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  get tests() {
    return this._tests;
  }

  set numberOfstudents(newNumberOfStudents) {
    this._numberOfStudents = newNumberOfStudents;
  }

  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at ${this._level} school level`);
  }
  pickSubstituteTeacher(substituteTeachers) {
    const randomNumber = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randomNumber];
  }

   static _calculateTestScores(arrayOfScores) {
        const length = arrayOfScores.length;
        if (length) {
          return arrayOfScores.reduce((a, b) => a+b, 0)/length;
        }
        return 0;
      }
  addTestScores(testDate, testScores) {
      this.tests.push({
            testDate,
            testScores,
            testAverageScore: School._calculateTestScores(testScores)
      });
      return this;
  }
  getAverageTestScores() {
    const totalTests = this._tests.length;
    if (totalTests) {
        return this._tests.reduce((a, b) => b.testAverageScore + a, 0)/totalTests;
    }
    return 0;
  }
  
    set overview(text) {
      this._overviewText = text;
    }
    overview() {
      if (this._overviewText) {
        console.log(this._overviewText);
      }
      console.log(`We had ${this._tests.length} tests with average score ${this.getAverageTestScores()}`);
      console.log('');
    }

}

class PrimarySchool extends School {
    constructor(name, numOfStudents, pickupPolicy) {
      super(name, 'primary', numOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
      return this._pickupPolicy;
    }

}
class MiddleSchool extends School {
    constructor(name, numOfStudents) {
      super(name, 'middle', numOfStudents);
    }
}

class HighSchool extends School {
      constructor(name, numOfStudents, sportsTeams) {
          super(name, 'HighSchool', numOfStudents);
          this._sportsTeams = sportsTeams;
      }

      get sportsTeams() {
        return this._sportsTeams;
      }

      overview() {
        this._overviewText += 'We play ' + this.sportsTeams.join(', ') + '.';
        super.overview();
      }

}

class SchoolCatalog {
  constructor() {
    this._schools = [];
  }

  addSchool(school) {
    this._schools.push(school);
    return this;
  }
  getSchool(name) {
      for (let i = 0, schoolsLen = this._schools.length; i < schoolsLen; i++) {
        if (this._schools[i].name === name) {
          return this._schools[i];
        }
      }
      return undefined;
  }
  get topSchools() {
    let schools = this._schools;
    return  schools.sort((a, b) =>  b.getAverageTestScores() - a.getAverageTestScores() );
  }
}

const lorrainePolicy = 'Students must be picked up by a parent, guardian, or a family member over the age of 13.';
 const lorraineTeachers = [
      'Jamal Crawford', 
      'Lou Williams', 
      'J. R. Smith', 
      'James Harden', 
      'Jason Terry', 
      'Manu Ginobli'];
const nameOfSchool = 'Lorraine HansBurry';

const lorraineHansburry = new PrimarySchool(nameOfSchool, 514,  lorrainePolicy);
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
const oxford = new MiddleSchool('Oxford', 455);
const catalog = new SchoolCatalog();

catalog.addSchool(oxford)
       .addSchool(lorraineHansburry)
       .addSchool(alSmith);

oxford.addTestScores('13-2-19', [6, 5, 6, 4, 5, 5, 4, 3]);
oxford.addTestScores('17-3-19', [3, 3, 2, 4, 4, 3, 6, 3]);

lorraineHansburry.pickSubstituteTeacher(lorraineTeachers);
lorraineHansburry.addTestScores('25-1-19', [3, 2, 5, 5, 6, 6, 4, 5]);
lorraineHansburry.addTestScores('27-2-19', [3, 2, 2, 2, 3, 4, 4, 3]);
lorraineHansburry.addTestScores('13-2-19', [6, 5, 6, 4, 5, 5, 4, 3]);
lorraineHansburry.addTestScores('17-3-19', [3, 3, 2, 4, 4, 3, 6, 3]);


alSmith.addTestScores('25-1-19', [3, 6, 5, 5, 6, 6, 4, 6]);
alSmith.addTestScores('25-1-19', [3, 6, 5, 5, 6, 6, 4, 6]);
alSmith.addTestScores('25-1-19', [3, 6, 5, 5, 6, 6, 4, 6]);
alSmith.addTestScores('27-4-19', [3, 6, 6, 6, 3, 4, 4, 6]);
alSmith.addTestScores('13-4-19', [6, 5, 6, 4, 5, 5, 4, 6]);
alSmith.addTestScores('17-4-19', [3, 3, 2, 4, 4, 3, 6, 6]);
const printSchool = school => {
  school.quickFacts();
  school.overview();
};
console.log('Top Schools!!!');
catalog.topSchools.map(printSchool);
//printSchool(catalog.getSchool('Al E. Smith'));
//printSchool(alSmith);
//printSchool(lorraineHansburry);


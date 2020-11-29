const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
 get appetizers() {
   return this._courses.appetizers;
 },
 get mains() {
   return this._courses.mains;
 },
 get desserts() {
   return this._courses.desserts;
 },
 set appetizers(appetizersIn) {
   this._courses.appetizers = appetizersIn;
 },
 set mains(mainsIn) {
    this._courses.mains = mainsIn;
 },
 set desserts(dessertsIn) {
    this._courses.desserts = dessertsIn;
 },
 get courses(){
    return this._courses;
 },
 addDishToCourse(course, name, price) {
   const dish = {
     name,
     price
   };
    this._courses[course].push(dish);
 },
 getRandomDishFromCourse(courseName) {
   const dishes = this._courses[courseName];
   const randomIndex = Math.floor(Math.random() * dishes.length);
   return dishes[randomIndex];
 },
 generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    let totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name} The price is ${totalPrice}.`;
 }
};


menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Greek Salad', 3.55);
menu.addDishToCourse('appetizers', 'Hallumi Salad', 4.25);

menu.addDishToCourse('mains', 'Lamb', 8.72);
menu.addDishToCourse('mains', 'Salmon', 13.6);
menu.addDishToCourse('mains', 'Chopped Pork on grill', 13.6);

menu.addDishToCourse('desserts', 'Chocolate Triffle', 6.25);
menu.addDishToCourse('desserts', 'Tiramisu', 3.25);
menu.addDishToCourse('desserts', 'Eclairs', 4.35);

let meal = menu.generateRandomMeal();
console.log(meal);
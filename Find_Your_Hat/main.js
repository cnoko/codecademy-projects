//const prompt = require('prompt-sync')({sigint: true});
var term = require( 'terminal-kit' ).terminal ;
var fs = require( 'fs' ) ;

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
class Field {
  constructor(field) {
      this._field = field;
  }
  print() {
     term.cyan( 'Find your hat:\n' ) ;
	var items = [];
	for (let i = 0; i < this._field.length; i++) {
			for (let j = 0; j < this._field.length; j++) {
					items.push(this._field[i][j]);
			}
	}

term.gridMenu( items , function( error , response ) {
	term( '\n' ).eraseLineAfter.green(
		"#%s selected: %s (%s,%s)\n" ,
		response.selectedIndex ,
		response.selectedText ,
		response.x ,
		response.y
	) ;
	process.exit() ;
} ) ;
  }
  moveLeft() {

  }
  moveRight() {

  }
  moveUp(){

  }
  moveDown() {

  }
}
Field.__proto__.generateField = (w, h) => {
    const field = [];
    for (let i =0; i < w; i++) {
      field[i] = [];
      for (let j =0; j < h; j++) {
        field[i].push()
      } 
    }
}
const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);
myField.print();



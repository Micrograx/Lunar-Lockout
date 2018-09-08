
let RED = 1
let BLUE = 0

var s = 100;
var spaces = []
var cant = 5
var blocks = []
var won = false

function setup(){
  createCanvas(600,600)
  //Creates Blank Spaces
  for(var j = 0; j < cant; j++){ // Filas *X*
    for(var i = 0; i < cant; i++){ // Columnas *Y*
      spaces.push(new space(j,i,s, spaces.length))
    }
  }

  blocks.push(new block(1,4,RED,s))
  blocks.push(new block(3,0,BLUE,s))
  blocks.push(new block(1,1,BLUE,s))
  blocks.push(new block(3,3,BLUE,s))
  //blocks.push(new block(0,0,BLUE,s))
  //blocks.push(new block(0,0,BLUE,s))
  noLoop()

}

function draw(){

  var totalMoves = 0
  spaces.forEach(function(space){
    space.draw()
  })

  blocks.forEach(function(block){
    block.draw()
    block.checkMoves(blocks)
    totalMoves += block.possibleMoves
  })
  console.log(totalMoves)


}

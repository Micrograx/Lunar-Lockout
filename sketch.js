
let RED = 1
let BLUE = 0

let UP = 0
let RIGHT = 1
let DOWN = 2
let LEFT = 3

var s = 100;
var spaces = []
var cant = 5
var blocks = []
var won = false
var states = []
var moves = []
var running = true

var prevMove = null

function setup(){
  createCanvas(600,600)

  //Creates Blank Spaces
  for(var j = 0; j < cant; j++){ // Filas *X*
    for(var i = 0; i < cant; i++){ // Columnas *Y*
      spaces.push(new space(j,i,s, spaces.length))
    }
  }

  params = getURLParams()
  if (params.level) {
    loadLevel(parseInt(params.level))
  } else {
    loadLevel(8)
  }

  //noLoop()
  //frameRate(1)
}

function draw(){

  var index = 0
  var index2 = 0
  var totalMoves = 0

  //console.log(totalMoves)

  states.push(new state(blocks,prevMove))
  states[states.length - 1].identificate()
  states[states.length - 1].calculate()

  running = true
  while (running){
    if (states[states.length - 1].possibleMoves === 0 ){
      states.pop()
      console.log("deleted")
      states[states.length - 1].moves.shift()
      states[states.length - 1].possibleMoves -= 1
      blocks = states[states.length - 1].getBlocks(blocks)
    } else {
      states[states.length - 1].moves[0].execute()
      prevMove = states[states.length - 1].moves[0]
      running = false
    }
  }

  spaces.forEach(function(space){
    space.draw()
  })

  blocks.forEach(function(block){
    block.draw()
  })


  if (blocks[0].pos.x == spaces[12].pos.x && blocks[0].pos.y == spaces[12].pos.y ) {
    noLoop()
    console.log("YOU WON")
    solution()
  }

}

solution = function(){
  for(var i = 0; i < states.length; i++){
    console.log(states[i].moves[0])
  }
}
loadLevel = function(i){
  switch (i) {
    case 1:
    blocks.push(new block(1,4,RED,s,0))
    blocks.push(new block(3,0,BLUE,s,1))
    blocks.push(new block(1,1,BLUE,s,2))
    blocks.push(new block(3,3,BLUE,s,3))
    break;
    case 2:
    blocks.push(new block(1,0,RED,s,0))
    blocks.push(new block(1,1,BLUE,s,1))
    blocks.push(new block(4,1,BLUE,s,2))
    blocks.push(new block(1,4,BLUE,s,3))
    blocks.push(new block(4,4,BLUE,s,4))
    break;
    case 3:
    blocks.push(new block(1,4,RED,s,0))
    blocks.push(new block(2,0,BLUE,s,1))
    blocks.push(new block(4,1,BLUE,s,2))
    blocks.push(new block(0,2,BLUE,s,3))
    blocks.push(new block(3,3,BLUE,s,4))
    blocks.push(new block(0,4,BLUE,s,5))
    break;
    case 4:
    blocks.push(new block(1,0,RED,s,0))
    blocks.push(new block(3,0,BLUE,s,1))
    blocks.push(new block(0,3,BLUE,s,2))
    blocks.push(new block(2,4,BLUE,s,3))
    blocks.push(new block(3,4,BLUE,s,4))
    break;
    case 5:
    blocks.push(new block(1,1,RED,s,0))
    blocks.push(new block(1,0,BLUE,s,1))
    blocks.push(new block(2,0,BLUE,s,2))
    blocks.push(new block(3,3,BLUE,s,3))
    blocks.push(new block(1,4,BLUE,s,4))
    break;
    case 6:
    blocks.push(new block(0,0,RED,s,0))
    blocks.push(new block(3,0,BLUE,s,1))
    blocks.push(new block(4,0,BLUE,s,2))
    blocks.push(new block(4,3,BLUE,s,3))
    blocks.push(new block(1,4,BLUE,s,4))
    blocks.push(new block(4,4,BLUE,s,5))
    break;
    case 7:
    blocks.push(new block(1,1,RED,s,0))
    blocks.push(new block(0,0,BLUE,s,1))
    blocks.push(new block(2,0,BLUE,s,2))
    blocks.push(new block(4,0,BLUE,s,3))
    blocks.push(new block(4,3,BLUE,s,4))
    blocks.push(new block(2,4,BLUE,s,5))
    break;
    case 8:
    blocks.push(new block(0,0,RED,s,0))
    blocks.push(new block(3,0,BLUE,s,1))
    blocks.push(new block(4,2,BLUE,s,2))
    blocks.push(new block(3,3,BLUE,s,3))
    blocks.push(new block(4,3,BLUE,s,4))
    blocks.push(new block(0,4,BLUE,s,5))
    break;
    case 9:
    blocks.push(new block(1,0,RED,s,0))
    blocks.push(new block(4,1,BLUE,s,1))
    blocks.push(new block(1,2,BLUE,s,2))
    blocks.push(new block(0,4,BLUE,s,3))
    blocks.push(new block(1,4,BLUE,s,4))
    blocks.push(new block(4,4,BLUE,s,5))
    break;
    case 10:
    blocks.push(new block(4,4,RED,s,0))
    blocks.push(new block(0,0,BLUE,s,1))
    blocks.push(new block(2,0,BLUE,s,2))
    blocks.push(new block(4,0,BLUE,s,3))
    blocks.push(new block(0,2,BLUE,s,4))
    blocks.push(new block(0,4,BLUE,s,5))
    break;
  }
}

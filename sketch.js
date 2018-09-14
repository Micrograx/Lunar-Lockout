
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

function setup(){
  createCanvas(600,600)
  //Creates Blank Spaces
  for(var j = 0; j < cant; j++){ // Filas *X*
    for(var i = 0; i < cant; i++){ // Columnas *Y*
      spaces.push(new space(j,i,s, spaces.length))
    }
  }

  blocks.push(new block(0,0,RED,s,0))
  blocks.push(new block(3,0,BLUE,s,1))
  blocks.push(new block(4,2,BLUE,s,2))
  blocks.push(new block(3,3,BLUE,s,3))
  blocks.push(new block(4,3,BLUE,s,4))
  blocks.push(new block(0,4,BLUE,s,5))

  frameRate(5)
}

function draw(){

  var index = 0
  var index2 = 0
  var totalMoves = 0
  spaces.forEach(function(space){
    space.draw()
  })

  blocks.forEach(function(block){
    block.draw()
  })
  //console.log(totalMoves)

  if (blocks[0].pos.x == spaces[12].pos.x && blocks[0].pos.y == spaces[12].pos.y ) {
    noLoop()
    console.log("YOU WON")
    for(var i = 0; i < states.length; i++){
      console.log(states[i].moves[0])
    }
  }


  states.push(new state(blocks))
  

  var currentState = states[states.length - 1]
  currentState.calculate()
  var running = true

  while (running){
    currentState = states[states.length - 1]
    if (currentState.moves.length == 0 ){
      states.pop()
      blocks = states[states.length - 1].blocks
      states[states.length - 1].moves.shift()
    }else{
      currentState.moves[0].execute()
      running = false
    }}

  }

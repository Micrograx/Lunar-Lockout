
function block(j,i,c,s,id){

  this.pos = createVector((j * s), (i * s))
  this.size = s
  this.colour = c
  this.canMove = [0,0,0,0]
  this.possibleMoves = []
  this.id = id
  this.nearest = [null,null,null,null]

  this.draw = function(){
    switch (this.colour) {
      case RED:
      fill(255,0,0)
      break;
      case BLUE:
      fill(0,0,255)
      break;
    }

    rect(this.pos.x,this.pos.y,this.size,this.size)
  }

  this.checkMoves = function(){
    this.findNearest()

    this.possibleMoves.length = 0
    
    if (this.canMove[0] == 1) {
      var finalPos = createVector(this.pos.x,this.nearest[0].pos.y + this.size)
      this.possibleMoves.push(new move(this.id,UP,finalPos))
    }
    if (this.canMove[1] == 1){
      var finalPos = createVector(this.nearest[1].pos.x - this.size,this.pos.y)
      this.possibleMoves.push(new move(this.id,RIGHT,finalPos))
    }
    if (this.canMove[2] == 1){
      var finalPos = createVector(this.pos.x,this.nearest[2].pos.y - this.size)
      this.possibleMoves.push(new move(this.id,DOWN,finalPos))
    }
    if (this.canMove[3] == 1){
      var finalPos = createVector(this.nearest[3].pos.x + this.size,this.pos.y)
      this.possibleMoves.push(new move(this.id,LEFT,finalPos))
    }

}

this.findNearest = function(){

  this.nearest = [null,null,null,null]
  this.canMove = [0,0,0,0]

  for(var i = 0; i < blocks.length; i++){
    block = blocks[i]
    // Check for nearest UP
    if (block.pos.x == this.pos.x && (block.pos.y < this.pos.y)){
      if (this.nearest[0] == null){
        this.nearest[0] = block
      } else if (block.pos.y > this.nearest[0].pos.y){
        this.nearest[0] = block
      }
    }
    // Check for nearest RIGHT
    if (block.pos.y == this.pos.y && (block.pos.x > this.pos.x)){
      if (this.nearest[1] == null){
        this.nearest[1] = block
      } else if (block.pos.x < this.nearest[1].pos.x){
        this.nearest[1] = block
      }
    }
    // Check for nearest DOWN
    if (block.pos.x == this.pos.x && (block.pos.y > this.pos.y)){
      if (this.nearest[2] == null){
        this.nearest[2] = block
      } else if (block.pos.y < this.nearest[2].pos.y){
        this.nearest[2] = block
      }
    }
    // Check for nearest LEFT
    if (block.pos.y == this.pos.y && (block.pos.x < this.pos.x)){
      if (this.nearest[3] == null){
        this.nearest[3] = block
      } else if (block.pos.x > this.nearest[3].pos.x){
          this.nearest[3] = block
      }
    }
  }

  if ((this.nearest[0] != null) && ((this.nearest[0].pos.y + this.size) < this.pos.y)) {this.canMove[0] = 1}
  if ((this.nearest[1] != null) && ((this.nearest[1].pos.x - this.size) > this.pos.x)) {this.canMove[1] = 1}
  if ((this.nearest[2] != null) && ((this.nearest[2].pos.y - this.size) > this.pos.y)) {this.canMove[2] = 1}
  if ((this.nearest[3] != null) && ((this.nearest[3].pos.x + this.size) < this.pos.x)) {this.canMove[3] = 1}


}

this.move = function(finalPos){
  this.pos = finalPos
}

}

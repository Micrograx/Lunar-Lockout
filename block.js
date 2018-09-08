
function block(j,i,c,s){

  this.pos = createVector((j * s), (i * s))
  this.size = s
  this.colour = c
  this.canMove = [0,0,0,0]
  this.possibleMoves = 0

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

  this.checkMoves = function(b){

    for(var i = 0; i < b.length; i++){
      block = b[i]
      if (block.pos.x == this.pos.x && block.pos.y < this.pos.y){
        this.canMove[0] = 1
        this.possibleMoves += 1
      }
      if (block.pos.x == this.pos.x && block.pos.y > this.pos.y){
        this.canMove[2] = 1
        this.possibleMoves++
      }
      if (block.pos.y == this.pos.y && block.pos.x < this.pos.x){
        this.canMove[4] = 1
        this.possibleMoves++
      }
      if (block.pos.y == this.pos.y && block.pos.x > this.pos.x){
        this.canMove[3] = 1
        this.possibleMoves++
      }
    }
  }

}

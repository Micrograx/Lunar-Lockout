function state(b,pm){

  this.blocks = b.map(a => ({...a}));
  this.possibleMoves = 0
  this.moves = []
  this.id = []
  this.previousMove = pm
  this.coords = []

  this.calculate = function(){

    this.possibleMoves = 0
    this.moves.length = 0

    for(var i = 0; i < this.blocks.length; i++){
      var block = this.blocks[i]
      block.checkMoves()
      this.possibleMoves += block.possibleMoves.length
      this.moves.push.apply(this.moves, block.possibleMoves)
    }

    if (this.previousMove != null){

      for (var i = 0; i < this.moves.length; i++){
        if (this.moves[i].block == this.previousMove.block){
          if(((this.moves[i].direction + 2) % 4) == this.previousMove.direction){
            this.moves.splice(i,1)
            this.possibleMoves -= 1
          }
        }
      }

    }

  }

  this.identificate = function(){
    this.id.length = 0

    for (var i = 0; i < this.blocks.length; i++){
      var xp = this.blocks[i].pos.x / s
      var yp = this.blocks[i].pos.y / s
      var n = xp + (yp * cant)

      this.id.push(n)
      this.coords.push(createVector(this.blocks[i].pos.x,this.blocks[i].pos.y))
    }
  }

  this.getBlocks = function(b){

    for (var i = 0; i < b.length; i++){
      b[i].pos.x = this.coords[i].x
      b[i].pos.y = this.coords[i].y
    }

    return b
  }

}

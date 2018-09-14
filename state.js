function state(b){

  this.blocks = b.map(a => ({...a}));
  this.possibleMoves = 0
  this.moves = []

  this.calculate = function() {

    this.possibleMoves = 0
    this.moves.length = 0

    for(var i = 0; i < blocks.length; i++){
      var block = blocks[i]
      block.checkMoves()
      this.possibleMoves += block.possibleMoves.length
      this.moves.push.apply(this.moves, block.possibleMoves)
    }
  }

}

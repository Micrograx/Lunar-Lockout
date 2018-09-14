function move(b,d,pos){

  this.block = b
  this.direction = d
  this.finalPos = pos


  this.execute = function(){
    blocks[this.block].move(this.finalPos)
  }
}

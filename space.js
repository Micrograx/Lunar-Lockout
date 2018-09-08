function space(j, i, s, id) {

  let FREE = 0
  let OCCUPIED = 1

  this.pos = createVector((j * s), (i * s))
  this.size = s
  this.state = FREE
  this.id = id

  this.draw = function() {
    if (this.id == 12) {
      fill(50)
    } else {
      fill(180)
    }
    rect(this.pos.x, this.pos.y, this.size, this.size)
  }


}

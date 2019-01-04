var Point = function(x,y) {
    this.x = x
    this.y = y
}
var Line = function(p1,p2) {
    this.p1 = p1
    this.p2 = p2
    this.length = Math.sqrt(
        Math.pow(p1.x - p2.x, 2) +
        Math.pow(p1.y - p2.y, 2)
    )
}
var Shape = function() {
    this.points = []
    this.lines = []
    this.init()
}
Shape.prototype = {
    constructor: Shape,
    init: function(canvasId) {
        var canvas = document.getElementById(canvasId)
        Shape.prototype.context = canvas.getContext('2d')
    },
    draw: function() {
        
    }
}
var Point = function(x,y) {
    this.x = x
    this.y = y
}
var Line = function(p1,p2,canvasId) {
    this.p1 = p1
    this.p2 = p2
    this.length = Math.sqrt(
        Math.pow(p1.x - p2.x, 2) +
        Math.pow(p1.y - p2.y, 2)
    )
    this.init()
}
Line.prototype = {
    constructor: Line,
    init: function(canvasId) {
        var canvas = document.getElementById(canvasId)
        Line.prototype.context = canvas.getContext('2d')
    },
    draw: function(color) {
        var ctx = this.context
        ctx.strokeStyle = color
        ctx.beginPath()
        ctx.moveTo(this.p1.x,this.p1.y)
        ctx.lineTo(this.p2.x,this.p2.y)
        ctx.endPath()
    }
}
var Shape = function(canvasId) {
    this.points = []
    this.lines = []
    this.init(canvasId)
}
Shape.prototype = {
    constructor: Shape,
    init: function(canvasId) {
        var canvas = document.getElementById(canvasId)
        Shape.prototype.context = canvas.getContext('2d')
    },
    draw: function(useLine) {

    }
}
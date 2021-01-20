class Paper{
    constructor(){
        var options ={
            'restitution': 0.3,
            'friction':1,
            'density':1.2,
            //'isStatic':true
        }
        this.body = Bodies.circle(100,100,30,options);
        this.radius = 30;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        fill('white');
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}

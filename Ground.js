class Ground{
    constructor(){
        var options ={
            isStatic: true
        }
        this.body = Bodies.rectangle(400,690,800,20,options);
        this.height = 20;
        this.width = 800;
        World.add(world, this.body);
    }
    display(){
        rectMode(CENTER);
        fill('grey');
        rect(400,690,this.width,this.height);
    }
}
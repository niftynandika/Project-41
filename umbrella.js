class Umbrella{
    constructor(x,y){
        var options = {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x, y, 50, options);
        this.radius = 50;
        World.add(world, this.body);
        this.image = loadImage("images/umbrellaboy.png");
    }

    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y+70,300,300);
    }
}
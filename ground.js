class Ground
{
    constructor(x,y,h,w)
    {
        let groundObj = {
            isStatic:true
        }

        let leftSide = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,h,w,options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }

    show(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        stroke(255);
        fill(127);
        rect(pos.x,pos.y,this.h,this.w);
        pop();
    }
}
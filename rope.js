class Rope{
	constructor(body1, body2, pointA, pointB)
	{
		this.pointA = pointA
		this.pointB = pointB

		var options = {
			bodyA: body1,
			bodyB: body2,
			pointB: {x:this.pointA,y:this.pointB}
		}
		this.rope = Constraint.create(options)
		World.add(world,this.rope)
	}
	//create rope constraint here



    //create display() here 
	display () {
		var pointA = this.rope.bodyA.position
		var pointB = this.rope.bodyB.position

		//push()
		strokeWeight(3)
		//stroke(255)
		line(pointA.x,pointA.y,pointB.x + this.pointA, pointB.y+this.pointB)
		//pop()
	}

}

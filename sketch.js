    const Engine = Matter.Engine;
    const World= Matter.World;
    const Bodies = Matter.Bodies;

    var engine, world;
    var box1,box2,box3,box4,box5;
    var pig1,pig2;
    var log1,log2,log3,log4;
    var bird1;

    function setup(){
        var canvas = createCanvas(1200,400);
        engine = Engine.create();
        world = engine.world;

        box1 = new Box(780,300,80,80);
        box2 = new Box(1000,300,80,80);
        box3 = new Box(780,240,80,80);
        box4 = new Box(1000,240,80,80);
        box5 = new Box(900,200,80,80);

        ground = new Ground(600,height,1200,20)
        pig1 = new pig(900,300);
        pig2 = new pig(900,230);
        // the angles are calculated in radian PI
        // PI = 180^, PI/2 = 90^, PI/4 = 45^
        log1 = new log(890,260,300,PI/2);
        log2 = new log(890,210,300,PI/2);
        log3 = new log(930,140,150,-PI/8);
        log4 = new log(820,140,150,PI/8);
    
        bird1 = new bird(200,200);
    }

    function draw(){
        background(0);
        Engine.update(engine);
        console.log(box2.body.position.x);
        console.log(box2.body.position.y);
        console.log(box2.body.angle);
        box1.display();
        box2.display();
        box3.display();
        box4.display();
        box5.display();
        ground.display();
        pig1.display();
        pig2.display();
        log1.display();
        log2.display();
        log3.display();
        log4.display();
        bird1.display();
    }
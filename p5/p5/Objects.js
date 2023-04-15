function woopee() {
    if (localStorage.getItem("mapX") === null) {
        localStorage.setItem("mapX",w*1.5) 
    }
    else {
        mmap.x = parseInt(localStorage.getItem("mapX"))
    }
    if (localStorage.getItem("mapY") === null) {
        localStorage.setItem("mapY",h*0.7)
    }
    else {
        mmap.y = parseInt(localStorage.getItem("mapY"))
    }
    if (localStorage.getItem("playerX") === null) {
        localStorage.setItem("playerX",w*0.15) 
    }
    else {
        player.x = parseInt(localStorage.getItem("playerX"))
    }
    if (localStorage.getItem("playerY") === null) {
        localStorage.setItem("playerY",h/2)
    }
    else {
        player.y = parseInt(localStorage.getItem("playerY"))
    }
    if (localStorage.getItem("colobuttX") === null) {
        localStorage.setItem("colobuttX",w*0.35)
    }
    else {
        colobutton.x = parseInt(localStorage.getItem("colobuttX"))
    }
    if (localStorage.getItem("colobuttY") === null) {
        localStorage.setItem("colobuttY",h*0.30)
    }
    else {
        colobutton.y = parseInt(localStorage.getItem("colobuttY"))
    }
    
}
function setpos() {
    localStorage.setItem("mapX",mmap.x) 
    localStorage.setItem("mapY",mmap.y)
    localStorage.setItem("playerX",player.x) 
    localStorage.setItem("playerY",player.y)
    localStorage.setItem("colobuttX",colobutton.x)
    localStorage.setItem("colobuttY",colobutton.y)
}
function pplayer() {
    this.width = w*0.05
    this.height = h*0.15
    this.x = parseInt(localStorage.getItem("playerX"))
    this.y = parseInt(localStorage.getItem("playerY"))

    this.show = function(img) {
        imageMode(CORNER)
        image(img,this.x-this.width,this.y-this.height,this.width,this.height) 
    }
    this.moving = function() {
    if (keyIsDown(68)) {
        player.show(right)
        
        if (player.x < w/2) {
            player.x += 5
        }
        else {
            if (((mmap.x)+w*1.5) < w+30) {
                if ((player.x) + 50 > w ) {

                }
                else {
                    player.x += 5
                }
            }
            else {
                mmap.x -= 5
                colobutton.x -= 5
            }
    }
    setpos()
    }
    else if (keyIsDown(65)) {
        player.show(left)
        if (player.x > w/2) {
            player.x -= 5
        }
        else {
            if (((mmap.x)-w*1.5) > -25) {
                if ((player.x) - 50 < 0 ) {

                }
                else {
                    player.x -= 5
                }
            }
            else {
                mmap.x += 5
                colobutton.x += 5
            }
        }
        setpos()
    }
    else {
        player.show(idle)
    }
    if (keyIsDown(87)) {
        if (player.y > h/2) {
            player.y -= 5
        }
        else {
        if (((mmap.y)-h*1.5) > -25) {
            if ((player.y) - 50 < 0 ) {

            }
            else {
                player.y -= 5
            }
        }
        else {
            mmap.y += 5
            colobutton.y += 5
        }
}  
setpos()
}
    else if (keyIsDown(83)) {
    if (player.y < h/2) {
        player.y += 5
    }
    else {
        if (((mmap.y)+h*1.5) < h+30) {
            if ((player.y) + 50 > h ) {

            }
            else {
                player.y += 5
            }
        }
        else {
            mmap.y -= 5
            colobutton.y -= 5
        }
}
setpos()
}
    }

    }
function mmap() {
    this.width = w*3
    this.height = h*3
    this.x = parseInt(localStorage.getItem("mapX"))
    this.y = parseInt(localStorage.getItem("mapY"))
    
    this.show = function(img) {
        imageMode(CENTER)
        image(img,this.x,this.y,this.width,this.height) 
    }
}
function smap() {
    this.x = w/2
    this.y = h/2
    this.width = w*3
    this.height = h*3
    
    this.show = function(img) {
        imageMode(CENTER)
        image(img,this.x,this.y,this.width,this.height) 
    }
}
function shooterp() {
    this.width = w*0.05
    this.height = h*0.15
    this.show = function(img) {
        imageMode(CORNER)
        image(img,shooterx-(player.width)/2,shootery-(player.height)/2,this.width,this.height) 
    }
    this.moving = function() {
        if (keyIsDown(68)) {
            player.show(right)
            
            if (shooterx < w/2) {
                
                shooterx += 5
            }
            else {
                if (((smap.x)+w*1.5) < w+30) {
                    
                    if ((shooterx) + 50 > w ) {
                        console.log("4")
                    }
                    else {
                        
                        shooterx += 5
                        
                        
                    }
                }
                else {
                    
                    smap.x -= 5

                    for (var i = 0; i < bullets.length; i++){
                        bullets[i].x -= 5;

                    }
                    for (var i = 0; i < enemies.length; i++) {
                        enemies[i].x -= 5

                    }
                }
        }

        }
        else if (keyIsDown(65)) {
            player.show(left)
            if (shooterx > w/2) {
                shooterx -= 5
            }
            else {
                if (((smap.x)-w*1.5) > -25) {
                    if ((shooterx) - 50 < 0 ) {
    
                    }
                    else {
                        shooterx -= 5
                    }
                }
                else {
                    smap.x += 5

                    for (var i = 0; i < bullets.length; i++){
                        bullets[i].x += 5;

                    }
                    for (var i = 0; i < enemies.length; i++) {
                        enemies[i].x += 5

                    }
                }
            }

        }
        else {
            player.show(idle)
        }
        if (keyIsDown(87)) {
            if (shootery > h/2) {
                shootery -= 5
            }
            else {
            if (((smap.y)-h*1.5) > -25) {
                if ((shootery) - 50 < 0 ) {
    
                }
                else {
                    shootery -= 5
                }
            }
            else {
                smap.y += 5
             
                for (var i = 0; i < bullets.length; i++){
                    bullets[i].y += 5;

                }
                for (var i = 0; i < enemies.length; i++) {
                    enemies[i].y += 5

                }
            }
    }  

    }
        else if (keyIsDown(83)) {
        if (shootery < h/2) {
            shootery += 5
        }
        else {
            if (((smap.y)+h*1.5) < h+30) {
                if ((shootery) + 50 > h ) {
    
                }
                else {
                    shootery += 5
                }
            }
            else {
                smap.y -= 5
           
                for (var i = 0; i < bullets.length; i++){
                    bullets[i].y -= 5;

                }
                for (var i = 0; i < enemies.length; i++) {
                    enemies[i].y -= 5

                }
            }
    }

    }
        }
}
function bullet(xSpd,ySpd) {
    this.x = shooterx
    this.y = shootery
    this.r = 25


    this.update = function() {
        this.x += xSpd*10;
		this.y += ySpd*10;

    }
    this.show = function() {
		fill(255,0,0);
		ellipse(this.x, this.y, this.r);
    }
    this.detect = function() {
        for (var i = 0; i < enemies.length; i++) {
            hit = collideRectCircle(enemies[i].x,enemies[i].y,enemies[i].width,enemies[i].height,this.x,this.y,this.r) 
            if (hit == true) {
                enemies.splice(i,1)
                bullets.splice(i,1)
            }

            
        }
    }
}
function getMouseVector(){
	let mouseX2 = mouseX - shooterx;
	let mouseY2 = mouseY - shootery;

	let mouseDir = createVector(mouseX2, mouseY2);

	mouseDir.normalize();

	return mouseDir;
}
function colobutton() {
    this.x = localStorage.getItem("colobuttX")
    this.y = localStorage.getItem("colobuttY")
    this.width = w/6
    this.height = h/6
    this.show = function() {
        imageMode(CORNER)
        image(butt,this.x,this.y,this.width,this.height)
    }
    this.redirect = function() {
        location.href = "shooter.html"
    }
}
function coloenemy() {
    if (round(random(2)) == 1) {
        this.x = random(w)
        if (round(random(2)) == 1) {
            this.y = 0
        }
        else {
            this.y = h
        }
    }
    else if (round(random(2)) == 2) {
        this.y = random(h)
        if (round(random(2)) == 1) {
            this.x = 0
        }
        else {
            this.x = w
        }
    }

    this.width = w*0.05
    this.height = h*0.08 
    this.getDir = function() {
        let dirx = shooterx - this.x;
	    let diry = shootery - this.y;

	    let Direction = createVector(dirx, diry);

	    Direction.normalize();

	    return Direction;
    }
    this.update = function(xSpd,ySpd) {
        this.x += xSpd*5;
		this.y += ySpd*5;

    }
    this.show = function(img) {
       imageMode(CORNER)
       image(img,this.x,this.y,this.width,this.height) 
    }

}
function runnerp() {
    this.height = h*0.15
    this.x = w/2
    this.y = h-this.height-this.height*1.2
    this.width = w*0.05
    this.gravity = 0.3;

    this.velocity = 0;
    this.jump = function() {
        this.velocity -= this.height*0.1;
    }
    this.show = function() {
        image(right,this.x,this.y,this.width,this.height)
    }
    this.update = function() {
        this.velocity += this.gravity;
    // this.velocity *= 0.9;
        this.y += this.velocity;

        if ((this.y + this.height*2.2) > h) {
            this.y = h - this.height*2.2;
            this.velocity = 0;
            jump = true
        }
    }
}
function runnermap() {
    this.x = 0
    this.y = -10
    this.height = h+10
    this.width = w*3.5
    this.show = function() {
        imageMode(CORNER)
        image(mapimg,this.x,this.y,this.width,this.height)
    }
    this.update = function() {
        if (this.x + this.width < w) {

        }
        else{
        this.x -= player.width*0.05 
        for(var i = 0; i < houses.length; i++) {
            houses[i].x -= player.width*0.05 
        }
        for(var i = 0; i < fires.length; i++) {
            fires[i].x -= player.width*0.05
        }
        }
    }
}
function house1(inputx,inputy) {
    this.x = inputx
    this.y = inputy
    this.width = player.width*5
    this.height = player.height*2
    this.show = function() {
        imageMode(CORNER)
        image(houseimg,this.x,this.y,this.width,this.height)
    }
    
}
function house2(inputx,inputy) {
    this.x = inputx
    this.y = inputy
    this.width = player.width*5
    this.height = player.height*3
    this.show = function() {
        imageMode(CORNER)
        image(house2img,this.x,this.y,this.width,this.height)
    }
}
function fire(inputx,inputy) {
    this.x = inputx
    this.y = inputy
    this.width = player.width*1.5
    this.height = player.height
    this.show = function() {
        imageMode(CORNER)
        image(fireimg,this.x,this.y,this.width,this.height)
    }
    
}
